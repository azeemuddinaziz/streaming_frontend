import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { getChannelByChannelName } from "@/services/user.services";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toggleSubscription } from "@/services/subscription.services";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Home from "./Home";
import { useAuth } from "@/context/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  const { username } = useParams();
  const [profile, setProfile] = useState();

  //@ts-ignore
  useEffect(() => {
    try {
      const getData = async () => {
        //@ts-ignore
        const data = await getChannelByChannelName(username);
        setProfile(data);
      };
      getData();
      console.log(profile);
    } catch (error) {
      return error;
    }
  }, [username]);

  if (!profile) return <div>Loading...</div>;

  const handleSubscribeClick = async () => {
    try {
      //@ts-ignore
      await toggleSubscription(profile._id);
      //@ts-ignore
      setProfile({ ...profile, isSubscribed: !profile.isSubscribed });
    } catch (error) {
      return error;
    }
  };

  return (
    <ScrollArea className="overflow-scroll w-full">
      <Card>
        <CardHeader className="flex flex-col gap-4">
          <div className="h-48 ">
            <img
              //@ts-ignore
              src={profile.coverImage}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-between items-center px-4">
            <div className="flex gap-4 items-center">
              <div className="w-1/6 rounded-full overflow-hidden">
                <img
                  //@ts-ignore
                  src={profile.avatar}
                  //@ts-ignore
                  alt={profile.username.slice(0, 2).toUpperCase()}
                  className="overflow-hidden"
                />
              </div>
              <div className="flex flex-col gap-2">
                <CardTitle>
                  {
                    //@ts-ignore
                    profile.fullname
                  }
                </CardTitle>
                <CardDescription>
                  @
                  {
                    //@ts-ignore
                    profile.username
                  }
                </CardDescription>
                <CardDescription className="text-md">
                  {
                    //@ts-ignore
                    profile.subscribersCount
                  }
                  <span> • Subscribers</span>
                </CardDescription>
              </div>
            </div>

            {
              //@ts-ignore
              profile.isSubscribed ? (
                <Button
                  onClick={() => handleSubscribeClick()}
                  variant={"secondary"}
                >
                  Subscribed
                </Button>
              ) : //@ts-ignore
              user.username !== username ? (
                <Button onClick={() => handleSubscribeClick()}>
                  Subscribe
                </Button>
              ) : (
                <Button onClick={() => console.log("clicked")}>
                  Edit Profile
                </Button>
              )
            }
          </div>
        </CardHeader>

        <CardContent className="w-full">
          <Tabs defaultValue="videos" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger className="w-full" value="videos">
                Videos
              </TabsTrigger>
              <TabsTrigger className="w-full" value="tweets">
                Tweets
              </TabsTrigger>
              <TabsTrigger className="w-full" value="about">
                About
              </TabsTrigger>
            </TabsList>
            <TabsContent value="videos">
              <div className="grid grid-cols-4 gap-4">
                <Home />
              </div>
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </ScrollArea>
  );
}
