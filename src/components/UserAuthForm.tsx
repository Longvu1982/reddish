"use client";
import React, { useState } from "react";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { Icons } from "./Icons";
import { useToast } from "@/hooks/use-toast";

interface IUserAuthForm extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: React.FC<IUserAuthForm> = ({ className, ...props }) => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const { toast } = useToast();

    const loginWithGoogle = async () => {
        setLoading(true);
        try {
            await signIn("google");
        } catch (err) {
            // toaster error
            toast({
                title: "Attempt to login failed",
                description: "There was a problem signing in with Google.",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className={cn("flex justify-center", className)} {...props}>
            <Button onClick={loginWithGoogle} isLoading={isLoading} size="sm" className="w-full">
                {isLoading ? null : <Icons.google className="w-4 h-4 mr-2" />}
                Google
            </Button>
        </div>
    );
};

export default UserAuthForm;
