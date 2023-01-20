import { axiosWithTokenSSR } from "@axios/axiosInstance";
import { GetServerSidePropsContext, PreviewData } from "next";
import { ParsedUrlQuery } from "querystring";

export type QueryResponse<T> = [error: string | null, data: T | null];

export const fetcherSSR = async <T>(
	ctx: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
	url: string
): Promise<QueryResponse<T>> => {
	try {
		const $axiosWithTokenSSR = axiosWithTokenSSR(ctx);
		const { data } = await $axiosWithTokenSSR.get<T>(url);
		return [null, data];
	} catch (error: any) {
		return [error.message, null];
	}
};
