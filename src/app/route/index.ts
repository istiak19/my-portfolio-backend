// import { Router } from "express";
// import { userRoutes } from "../modules/user/user.route";
// import { authRoutes } from "../modules/auth/auth.route";
// import { OtpRoutes } from "../modules/otpCode/otpCode.route";
// import { parcelRoutes } from "../modules/parcel/parcel.route";
// import { contactRoutes } from "../modules/contact/contact.route";

// export const router = Router();

// const moduleRouter = [
//     {
//         path: "/user",
//         route: userRoutes
//     },
//     {
//         path: "/auth",
//         route: authRoutes
//     },
//     {
//         path: "/otp",
//         route: OtpRoutes
//     },
//     {
//         path: "/parcels",
//         route: parcelRoutes
//     },
//     {
//         path: "/contact",
//         route: contactRoutes
//     },
// ];

// moduleRouter.forEach((route) => {
//     router.use(route.path, route.route)
// });