import { Github } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "./ui/button";
import Search from "./search";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "@/lib/routes-config";
import { SheetClose } from "@/components/ui/sheet";
import {memo} from "react";

export const NAVLINKS = [
	{
		title: "Документация",
		href: `/docs/${page_routes[0].href}`,
	},
	{
		title: "Q&A",
		href: `/docs/faq/qna`,
	},
	{
		title: "Релизы",
		href: "https://github.com/Storik4pro/goodbyeDPI-UI/releases",
	},
    {
        title: "Поддержка",
        href: "https://github.com/Storik4pro/goodbyeDPI-UI/issues",
    },
];

export const Navbar = memo(() => {
	return (
		<nav className="w-full border-b h-16 sticky top-0 z-50 lg:px-4 px-2 backdrop-filter backdrop-blur-xl bg-opacity-5">
			<div className="sm:p-3 p-2 max-w-[1530px] mx-auto h-full flex items-center justify-between gap-2">
				<div className="flex items-center gap-5">
					<SheetLeftbar />
					<div className="flex items-center gap-8">
						<div className="sm:flex hidden">
							<Logo />
						</div>
						<div className="lg:flex hidden items-center gap-5 text-sm font-medium text-muted-foreground">
							<NavMenu />
						</div>
					</div>
				</div>

				<div className="flex items-center gap-3">
					<div className="flex items-center gap-2">
						<Search />
						<div className="flex">
							<Link
								href="https://github.com/Storik4pro/goodbyeDPI-UI"
								className={buttonVariants({ variant: "ghost", size: "icon" })}
							>
								<Github className="h-[1.1rem] w-[1.1rem]" />
							</Link>
							<ModeToggle />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
})
Navbar.displayName = "Navbar";

export const Logo = memo(() => {
	return (
		<Link href="/" className="flex items-center gap-2.5">
			{/*<Image src={""} />*/}
			<h2 className="text-md font-bold">GoodbyeDPI/UI</h2>
		</Link>
	);
})
Logo.displayName = "Logo";

export const NavMenu = ({ isSheet = false }) => {
	return (
		<>
			{NAVLINKS.map((item) => {
				const Comp = (
					<Anchor
						key={item.title + item.href}
                        className="font-medium hover:text-black dark:text-white"
						absolute
						href={item.href}
					>
						{item.title}
					</Anchor>
				);
				return isSheet ? (
					<SheetClose key={item.title + item.href} asChild>
						{Comp}
					</SheetClose>
				) : (
					Comp
				);
			})}
		</>
	);
}
