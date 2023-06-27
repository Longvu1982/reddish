import React, { FC } from "react";
import { User } from "next-auth";
import { AvatarFallback, AvatarProps } from "@radix-ui/react-avatar";
import Image from "next/image";
import { Avatar } from "./ui/Avatar";
import { Icons } from "./Icons";

interface IUserAvatarProps extends AvatarProps {
    user: Pick<User, "name" | "image">;
}

const UserProfilePicture: FC<IUserAvatarProps> = ({ user, ...props }) => {
    return (
        <Avatar {...props}>
            {user.image ? (
                <div className="relative aspect-square h-full w-full">
                    <Image fill src={user.image} alt="profile pic" referrerPolicy="no-referrer" />
                </div>
            ) : (
                <AvatarFallback>
                    <span className="sr-only">{user?.name}</span>
                    <Icons.user className="w-4 h-4" />
                </AvatarFallback>
            )}
        </Avatar>
    );
};

export default UserProfilePicture;
