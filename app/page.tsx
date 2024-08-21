"use client"

import {MoveUpRightIcon, TerminalIcon} from "lucide-react";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {page_routes} from "@/lib/routes-config";
import {memo} from "react";

const Home = memo(() => {
    return (
        <div className="flex sm:min-h-[91vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
            <Link
                href="https://github.com/Storik4pro/goodbyeDPI-UI"
                target="_blank"
                className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4"
            >
                Следите за проектом на GitHub{" "}
                <MoveUpRightIcon className="w-4 h-4 font-extrabold"/>
            </Link>
            <h1 className="text-3xl font-bold mb-4 sm:text-7xl">
                GoodbyeDPI/UI
            </h1>
            <p className="mb-8 sm:text-xxl max-w-[780px] text-muted-foreground">
                GoodbyeDPI/UI предоставляет удобный графический интерфейс для управления скриптами GoodbyeDPI.
                С его помощью вы можете легко изменять настройки DPI и запускать соответствующие скрипты.
            </p>
            <div className="flex flex-row items-center gap-5">
                <Link
                    href={`/docs/${page_routes[0].href}`}
                    className={buttonVariants({className: "px-6", size: "lg"})}
                >
                    Подробнее
                </Link>
                <Link
                    href={`/docs/${page_routes[5].href}`}
                    className={buttonVariants({
                        variant: "outline",
                        className: "px-6",
                        size: "lg",
                    })}
                >
                    Журнал изменений
                </Link>
            </div>
            {/*<span className="flex flex-row items-center gap-2 text-zinc-400 text-md mt-7 -mb-12 max-[800px]:mb-12">*/}
			{/*	<TerminalIcon className="w-4 h-4 mr-1"/> ~ npx this-library-name@latest*/}
			{/*</span>*/}
        </div>
    );
})

Home.displayName = "Home";

export default Home;
