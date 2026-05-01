"use client";

import { UpdateUserProfile } from "@/components/UpdateUserProfile";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";

const ProfilePage = () => {
  const userData = authClient.useSession();
  // console.log(userData,'userData')
  const user = userData.data?.user;
  console.log(user, "user");
  return (
    <div>
      <Card className="max-w-96 mx-auto flex flex-col items-center border my-5 ">
        <Avatar className="w-20 h-20" size="sm">
          <Avatar.Image
            alt="Jhon Doe"
            src={user?.image}
            referrerPolicy="no-referrer"
          />
          <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
        </Avatar>
        <div className="">
          <h2 className=" sm:text-xs md:text-sm font-semibold">{user?.name}</h2>
          <p className="text-xs text-gray-500">{user?.email}</p>
        </div>
        <UpdateUserProfile></UpdateUserProfile>
      </Card>
    </div>
  );
};

export default ProfilePage;
