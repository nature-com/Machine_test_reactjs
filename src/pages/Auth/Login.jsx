import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { encryptPassword } from "../../utils/Encryption";

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    // const onSubmit = (data) => {
    //     const { identifier, password } = data;

    //     const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    //     const hashedPassword = encryptPassword(password);

    //     const user = storedUsers.find(
    //         (user) =>
    //             (user.email === identifier || user.mobile === identifier) &&
    //             user.password === hashedPassword
    //     );

    //     if (user) {
    //         alert("Login successful!");
    //         navigate("/dashboard");
    //     } else {
    //         alert("Invalid email/mobile or password. Please try again.");
    //     }
    // };

    const onSubmit = async (data) => {
        const { identifier, password } = data;
        const hashedPassword = encryptPassword(password);

        try {
            const response = await fetch("http://localhost:3001/users");
            const users = await response.json();

            const user = users.find(
                (user) =>
                    (user.email === identifier || user.mobile === identifier) &&
                    user.password === hashedPassword
            );

            if (user) {
                alert("Login successful!");
                navigate("/dashboard");
            } else {
                alert("Invalid email/mobile or password. Please try again.");
            }
        } catch (error) {
            console.error("Error logging in:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 mt-4 mb-4">
                    <div className="text-center mb-6 ">

                        <h3 className="text-3xl font-bold text-purple-600">
                            Login to our site
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">
                            Login to enjoy our services!
                        </p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                        <div>
                            <label htmlFor="identifier" className="block text-sm font-medium text-gray-700">
                                Email / Mobile number
                            </label>
                            <input
                                id="identifier"
                                type="text"
                                placeholder="Your email or mobile number"
                                autoComplete="off"
                                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                {...register("identifier", {
                                    required: "This field is required",
                                    validate: (value) => {
                                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                        const mobileRegex = /^\d{10}$/;
                                        return (
                                            emailRegex.test(value) ||
                                            mobileRegex.test(value) ||
                                            "Enter a valid email or mobile number"
                                        );
                                    },
                                })}
                            />
                            {errors.identifier && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.identifier.message}
                                </p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Password"
                                autoComplete="off"
                                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters long",
                                    },
                                })}
                            />
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="w-full text-[14px] py-2.5 rounded-[8px] bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:from-blue-600 hover:to-purple-600"
                        >
                            Login
                        </button>
                    </form>

                    <p className="">OR</p>
                    <p className="py-2 text-sm font-medium text-black">
                        If you do not have an account, please{" "}
                        <Link
                            to="/"
                            className="text-purple-600 hover:text-purple-800 transition"
                        >
                            Register
                        </Link>{" "}
                        here.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login;