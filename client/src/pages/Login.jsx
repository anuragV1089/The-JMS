import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const loginSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .required("Password is required")
      .min(4, "Password must be at least 4 characters")
      .max(128, "Password must be less than 128 characters"),
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    //   "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    // ),
  });

  const { login } = useAuth();
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-6 bg-gradient-to-r from-violet-500 via-red-600 to-yellow-500 rounded-xl p-[2px] mt-20">
        <Card className="bg-black text-white p-10 text-center flex justify-evenly min-h-160 max-w-150">
          <CardHeader>
            <CardTitle className="text-5xl">Login</CardTitle>
            <CardDescription className="text-2xl mb-4">
              Enter your username and password.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Formik
              initialValues={{
                username: "",
                password: "",
              }}
              validationSchema={loginSchema}
              onSubmit={async (values, { setSubmitting }) => {
                let data = await login(values);
                console.log(data);
                setSubmitting(false);
                if (data.success) navigate("/");
              }}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form className="flex gap-4 flex-col">
                  <div className="grid grid-cols-1 w-full gap-6">
                    <div className="grid gap-3">
                      <Label className="text-2xl pl-3" htmlFor="username">
                        Name
                      </Label>
                      <Field
                        id="name"
                        name="username"
                        type="text"
                        className="p-5 w-auto bg-[#1b1b1b] border-0 !text-3xl flex items-center placeholder:text-3xl rounded-lg"
                        placeholder="Enter Name"
                        required
                      />
                      {errors.username && touched.username && (
                        <div>{errors.username}</div>
                      )}
                    </div>
                  </div>
                  <div className="grid gap-3">
                    <Label className="text-2xl pl-3" htmlFor="password">
                      Password
                    </Label>
                    <Field
                      className="p-5 w-auto bg-[#1b1b1b] border-0 !text-3xl flex items-center placeholder:text-3xl rounded-lg"
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter password"
                      required
                    />
                    {errors.password && touched.password && (
                      <div className="text-white text-md">
                        {errors.password}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3">
                    <button
                      type="submit"
                      className={`w-40 p-3 text-2xl bg-gradient-to-r from-violet-500 via-red-600 to-yellow-500 rounded-lg hover:text-black hover:bg-none hover:bg-white hover:font-bold ${
                        isSubmitting
                          ? "opacity-50 !bg-white !bg-none text-black font-bold"
                          : ""
                      }`}
                      disabled={isSubmitting}
                    >
                      {!isSubmitting ? "Log In" : "Logging In..."}
                    </button>
                  </div>

                  <div className="mt-2 text-center text-md text-white">
                    Don&apos;t have an account?{" "}
                    <Link to="/signup">Sign Up</Link>
                  </div>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
