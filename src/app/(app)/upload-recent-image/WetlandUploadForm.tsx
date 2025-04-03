'use client'

import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from '@/components/ui/checkbox';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
  wetlandName: z.string().min(1, "Wetland Name is required"),
  coordinates: z.string().min(1, "Coordinates are required"),
  district: z.string().min(1, "District is required"),
  village: z.string().min(1, "Village is required"),
  wetlandType: z.enum(["Inland", "Coastal"]),
  wetlandSubType: z.string().optional(),
  area: z.string().min(1, "Area is required"),
  khasraNo: z.string().min(1, "Khasra No. is required"),
  isRegulated: z.boolean(),
  recentImage: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const WetlandUploadForm = () => {

  const { toast } = useToast();

  const [uploadingImageLoading, setUploadingImageLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string>('');
  const [reportSending, setReportSending] = useState(false);

  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      wetlandType: "Inland",
      isRegulated: false,
    },
  });

  const handleUpload = async (imageFile: File | undefined) => {
    if (!imageFile) {
      console.error("No image to upload");
      return;
    }

    setUploadingImageLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", imageFile);

      const uploadResponse = await axios.post("/api/upload-recent-image", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setUploadedImage(uploadResponse.data.imageUrl);
      console.log("Upload successful:", uploadResponse.data);
    } catch (error) {
      console.error("Error uploading image:", error);
      setUploadedImage(""); // Reset on error
    } finally {
      setUploadingImageLoading(false);
    }
  };


  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setReportSending(true);

    const {
      wetlandName,
      coordinates,
      district,
      village,
      wetlandType,
      wetlandSubType,
      area,
      khasraNo,
      isRegulated,
    } = data;

    try {
      const reportData = {
        wetlandName,
        coordinates,
        district,
        village,
        wetlandType,
        wetlandSubType,
        area,
        khasraNo,
        isRegulated,
        recentImage: uploadedImage,
        timestamp: new Date(),
      };

      // Save to Firestore
      const docRef = await addDoc(collection(db, "recentImages"), reportData);
      console.log("Report saved with ID: ", docRef.id);
      toast({
        title: "Report submitted",
        description: "Your report has been submitted successfully",
      })
    } catch (error) {
      console.error("Error saving report: ", error);
    } finally {
      setReportSending(false);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="wetlandName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Wetland Name*</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="coordinates"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Coordinates*</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="district"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>District*</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="village"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Village*</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="wetlandType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Wetland Type*</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="wetlandSubType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Wetland Sub-Type</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="area"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Area (in acres)*</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="khasraNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Khasra No.*</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="isRegulated"
            render={({ field }) => (
              <FormItem>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked)}
                  name={field.name}
                  ref={field.ref}
                />
                <FormLabel className="ml-2">Is Regulated?</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col space-y-4">
            <FormField
              control={form.control}
              name="recentImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Recent Image</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        handleUpload(file); // Call the upload handler
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {uploadingImageLoading && (
              <div className="text-blue-500 text-sm">Uploading...</div>
            )}
            {uploadedImage && !uploadingImageLoading && (
              <div className="text-green-500 text-sm">Upload Successful!</div>
            )}
            {!uploadingImageLoading && !uploadedImage && (
              <div className="text-red-500 text-sm">No image uploaded</div>
            )}
          </div>


          <Button type="submit" disabled={reportSending || uploadingImageLoading}>
            {reportSending ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default WetlandUploadForm;
