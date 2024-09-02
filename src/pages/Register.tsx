import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";
import { Send } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface FormData {
  fullname?: string;
  username?: string;
  email?: string;
  password?: string;
  avatar?: string;
  coverImage?: string;
}

function Login() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>();

  if (isAuthenticated) {
    setTimeout(() => {
      navigate("/");
    }, 0);
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    window.alert(formData?.coverImage);
  };

  return (
    <div className="flex items-center justify-center h-full">
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Please fill the form to register</CardDescription>
        </CardHeader>

        <CardContent>
          <form className="grid grid-cols-2 gap-4" onSubmit={handleFormSubmit}>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="fullname">Full Name</Label>
              <Input
                type="text"
                id="fullname"
                placeholder="Full Name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, fullname: e.target.value })
                }
                required
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                placeholder="Username"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, username: e.target.value })
                }
                required
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="avatar">Avatar</Label>
              <Input
                type="file"
                id="avatar"
                placeholder="avatar"
                accept="image/*"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, avatar: e.target.value })
                }
                required
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="avatar">CoverImage</Label>
              <Input
                type="file"
                id="avatar"
                placeholder="avatar"
                accept="image/*"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, coverImage: e.target.value })
                }
              />
            </div>

            <div className="grid w-full items-center gap-1.5 col-span-2">
              <Button>
                <Send className="mr-2 h-4 w-4" /> Register
              </Button>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex items-center gap-1">
          <span>Already have an account?</span>
          <Link to="/login" className="hover:underline hover:text-ring">
            Login here
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
