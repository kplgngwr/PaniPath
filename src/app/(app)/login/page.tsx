'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Eye, EyeOff } from 'lucide-react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';

interface FormData {
    username: string;
    password: string;
    captcha: string;
}

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;
type FormSubmitEvent = React.FormEvent<HTMLFormElement>;

export default function LoginPage() {

    const router = useRouter();

    const {toast} = useToast();

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({
        username: '',
        password: '',
        captcha: '',
    });
    const [captcha, setCaptcha] = useState<string>('');

    useEffect(() => {
        generateCaptcha();
    }, []);

    const generateCaptcha = (): void => {
        const randomCaptcha = Math.floor(1000 + Math.random() * 9000).toString();
        setCaptcha(randomCaptcha);
    };

    const handleSubmit = (e: FormSubmitEvent): void => {
        e.preventDefault();
        if (formData.captcha !== captcha) {
            toast({
                title:'Error',
                description:'Captcha does not match. Please try again.',
                variant:'destructive'
            })
            return;
        }
        console.log('Form submitted:', formData);
        router.replace('/dashboard/home');
    };

    const handleInputChange = (e: InputChangeEvent): void => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const refreshCaptcha = (): void => {
        generateCaptcha();
    };

    return (
        <div className="min-h-screen bg-[#1e3a5f] flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-2 items-center">
                    <Image
                        src="https://dpgs.delhi.gov.in/themes/custom/dit_dpgs/images/emblem-dark.png"
                        alt="Indian Government Emblem"
                        width={64}
                        height={64}
                        priority
                    />
                    <h1 className="text-xl font-semibold text-center">
                        Delhi Parks and Gardens Society
                    </h1>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="username">
                                Username <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="username"
                                name="username"
                                type="text"
                                required
                                value={formData.username}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">
                                Password <span className="text-red-500">*</span>
                            </Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    required
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 hover:text-gray-700"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5 text-gray-500" />
                                    ) : (
                                        <Eye className="h-5 w-5 text-gray-500" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="captcha">
                                What code is in the image? <span className="text-red-500">*</span>
                            </Label>
                            <div className="flex gap-4 items-start">
                                <div className="flex-1 space-y-1">
                                    <Input
                                        id="captcha"
                                        name="captcha"
                                        type="text"
                                        required
                                        value={formData.captcha}
                                        onChange={handleInputChange}
                                    />
                                    <p className="text-xs text-gray-500">
                                        Enter the characters shown in the image.
                                    </p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <div className="border rounded-md p-2 mb-1">
                                        <div className="w-32 h-12 bg-gray-100 flex items-center justify-center text-lg font-bold">
                                            {captcha}
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={refreshCaptcha}
                                        className="text-blue-600 text-xs hover:underline"
                                    >
                                        Get new captcha!
                                    </button>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                                This question is for testing whether or not you are a human visitor and to prevent automated spam submissions.
                            </p>
                        </div>

                        <Button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white w-24"
                        >
                            Log in
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}