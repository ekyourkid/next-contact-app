export interface IRs_Common<T> {
    message: string;
    data: T | null;
}

export const CommonError: IRs_Common<undefined> = {
    message: "500",
    data: null,
};
