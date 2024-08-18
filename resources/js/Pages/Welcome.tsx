import type { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({
	auth,
	laravelVersion,
	phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
	return <>hy</>;
}
