import Title_Tech from "@/MY-EXPERTISE/atom/title_tech";
import Tech_Image from "@/MY-EXPERTISE/moleculs/tech_image";

export default function Main_Stack() {
    return (
        <>
            <Title_Tech />
            <p className='mt-28 px-16 mb-12 text-gray-500 text-md'>Frequently used technology 🢆	</p>
            <section className='mt-2  flex flex-wrap justify-center md:justify-start md:p-12 md:pt-0 md:pb-12 pb-12 items-center  gap-6 '>
                <Tech_Image />
            </section>
        </>
    )
}
