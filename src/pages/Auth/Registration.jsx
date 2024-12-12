import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { encryptPassword } from "../../utils/Encryption";

const Registration = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const options = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' },
    ];

    const onSubmit = async (data) => {
        try {
            const hashedPassword = encryptPassword(data.password);

            const newUser = {
                ...data,
                password: hashedPassword,
            };

            const response = await fetch("http://localhost:3001/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newUser),
            });

            if (response.ok) {
                alert("Registration successful!");
                navigate("/login");
            } else {
                throw new Error("Failed to register");
            }

        } catch (error) {
            console.error("Error saving user data:", error);
            alert("Registration failed. Please try again.");
        }
    };


    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 mt-4 mb-4">
                    <div className="text-center mb-6 ">

                        <h3 className="text-3xl font-bold text-purple-600">
                            Register to our site
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">
                            Create an account to enjoy our services!
                        </p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Your full name"
                                autoComplete="off"
                                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                {...register("name", {
                                    required: "Full name is required",
                                    maxLength: 30,
                                })}
                            />
                            {errors?.name?.message && (
                                <small className="text-red-600">
                                    {errors.name.message}
                                </small>
                            )}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Your email"
                                autoComplete="off"
                                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message:
                                            "Entered value does not match email format",
                                    },
                                })}
                            />
                            {errors?.email?.message && (
                                <small className="text-red-600">{errors.email.message}</small>
                            )}
                        </div>
                        <div>
                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                                Mobile Number
                            </label>
                            <input
                                id="mobile"
                                type="number"
                                placeholder="Mobile number"
                                autoComplete="off"
                                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                {...register("mobile", {
                                    pattern: {
                                        value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                        message: "Only numbers are allowed",
                                    },
                                    required: "Number is required",
                                })}
                            />
                            {errors?.mobile?.message && (
                                <small className="text-red-600">
                                    {errors.mobile.message}
                                </small>
                            )}
                        </div>
                        <div>
                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                                Gender
                            </label>
                            <Controller
                                name="gender"
                                control={control}
                                rules={{ required: "Gender is required" }}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        options={options}
                                        placeholder="Select gender"
                                        className="mt-2 text-left"
                                    />
                                )}
                            />
                            {errors?.gender?.message && (
                                <small className="text-red-600">
                                    {errors.gender.message}
                                </small>
                            )}
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                Address
                            </label>
                            <input
                                id="address"
                                type="text"
                                placeholder="Your address"
                                autoComplete="off"
                                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                {...register("address", {
                                    required: "Address is required",
                                    maxLength: 30,
                                })}
                            />
                            {errors?.address?.message && (
                                <small className="text-red-600">
                                    {errors.address.message}
                                </small>
                            )}
                        </div>
                        <div>
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                                State
                            </label>
                            <input
                                id="state"
                                type="text"
                                placeholder="State"
                                autoComplete="off"
                                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                {...register("state", {
                                    required: "State is required",
                                    maxLength: 30,
                                })}
                            />
                            {errors?.state?.message && (
                                <small className="text-red-600">
                                    {errors.state.message}
                                </small>
                            )}
                        </div>
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                City
                            </label>
                            <input
                                id="city"
                                type="text"
                                placeholder="City"
                                autoComplete="off"
                                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                {...register("city", {
                                    required: "City is required",
                                    maxLength: 30,
                                })}
                            />
                            {errors?.city?.message && (
                                <small className="text-red-600">
                                    {errors.city.message}
                                </small>
                            )}
                        </div>
                        <div>
                            <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">
                                Postal Code
                            </label>
                            <input
                                id="postal_code"
                                type="number"
                                placeholder="Postal code"
                                autoComplete="off"
                                className="w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                                {...register("postal_code", {
                                    required: "Postal code is required",
                                    maxLength: 7,
                                })}
                            />
                            {errors?.postal_code?.message && (
                                <small className="text-red-600">
                                    {errors.postal_code.message}
                                </small>
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
                                        message: "Password must be at least 6 characters"
                                    },
                                })}
                            />
                            {errors?.password?.message && (
                                <small className="text-red-600">
                                    {errors.password.message}
                                </small>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="w-full text-[14px] py-2.5 rounded-[8px] bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:from-blue-600 hover:to-purple-600"
                        >
                            Register
                        </button>
                    </form>

                    <p className="">OR</p>
                    <p className="py-2 text-sm font-medium text-black">
                        If you have an account, please{" "}
                        <Link
                            to="/login"
                            className="text-purple-600 hover:text-purple-800 transition"
                        >
                            Login
                        </Link>{" "}
                        here.
                    </p>
                </div>
            </div>

        </>
    )
}

export default Registration;