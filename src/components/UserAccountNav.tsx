"use client";

import { User } from "next-auth";
import React, { FC } from "react";
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator } from "./ui/DropdownMenu";
import UserProfilePicture from "./UserProfilePicture";
import Link from "next/link";
import { signOut } from "next-auth/react";

interface IUserAccountNav {
    user: Pick<User, "name" | "image" | "email">;
}

const UserAccountNav: FC<IUserAccountNav> = ({ user }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserProfilePicture className="w-8 h-8" user={user} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white" align="end">
                <div className="flex items-center justify-start gap-2 p-4">
                    <div className="flex flex-col space-y-1 leading-none">
                        {user.name && <p className="font-medium">{user.name}</p>}
                        {user.email && <p className="w-[200px] truncate text-sm text-zinc-700">{user.email}</p>}
                    </div>
                </div>

                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href="/" className="px-2">
                        Feed
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="/r/create" className="px-2">
                        Create community
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="/settings" className="px-2">
                        Settings
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    className="px-4 cursor-pointer"
                    onSelect={(e) => {
                        e.preventDefault();
                        signOut({
                            callbackUrl: `${window.location.origin}/sign-in`
                        })

                    }}
                >
                    Sign Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserAccountNav;
