import { Input } from "@/components/ui/input";
import type { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({
	auth,
	laravelVersion,
	phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
	return (
		<div className={"h-screen bg-background justify-center items-center mt-5"}>
			<Input name="hello" />
		</div>
	);
}
