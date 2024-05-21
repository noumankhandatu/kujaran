import { createApi } from "@reduxjs/toolkit/query/react";
import BaseURL from "../../../utils/config/baseUrl";

export const JudgeApi = createApi({
    reducerPath: "JudgeApi",
    tagTypes: ["JudgeApi"],
    baseQuery: BaseURL,
    endpoints: (builder) => ({
        jumpingScore: builder.mutation({
            query: (score) => ({
                url: "/judge/showjumping/scores/user",
                method: "POST",
                body: score,
            }),
            invalidatesTags: ["JudgeApi"],
        }),
    }),
});

export const {
    useJumpingScoreMutation
} = JudgeApi;

export default JudgeApi;
