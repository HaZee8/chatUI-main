<template>
    <section class="flex-1 overflow-y-auto">

    <div class="max-w-[900px] mx-auto px-8 py-7">

        <!-- USER MESSAGE -->
        <div class="flex justify-end mb-7">

            <div class="flex items-start gap-3 max-w-[580px]">

            <!-- Avatar -->
            <div
                class="
                order-2
                w-8
                h-8
                rounded-full
                shrink-0
                bg-gradient-to-br
                from-[#d6b98c]
                to-[#6b5540]
                flex
                items-center
                justify-center
                "
            >
                <span class="text-[10px]">
                A
                </span>
            </div>


            <!-- Message -->
            <div
                class="
                order-1
                bg-[#181b21]
                border
                border-[#20242c]
                rounded-[15px]
                rounded-tr-[5px]
                px-4
                py-4
                "
            >

                <p
                class="
                    text-[12px]
                    leading-[1.6]
                    text-[#d7dae0]
                "
                >
                Can you help me optimize this auth middleware block?
                It's currently blocking the main event loop during
                heavy payload parsing.
                </p>

                <div class="text-right mt-3">
                <span class="text-[9px] text-[#626a76]">
                    10:24 AM
                </span>
                </div>

            </div>

            </div>

        </div>


        <!-- AI MESSAGE -->
        <div class="flex items-start gap-3">

            <!-- AI avatar -->
            <div
            class="
                w-8
                h-8
                rounded-full
                shrink-0
                bg-gradient-to-br
                from-[#8b5cf6]
                to-[#06b6d4]
                flex
                items-center
                justify-center
            "
            >
            <span class="text-[12px] font-semibold">
                A
            </span>
            </div>


            <!-- Message -->
            <div
            class="
                max-w-[600px]
                bg-[#111317]
                border
                border-[#171a20]
                rounded-[14px]
                rounded-tl-[5px]
                px-4
                py-4
            "
            >

            <p
                class="
                text-[12px]
                leading-[1.65]
                text-[#d1d4da]
                "
            >
                Understood. For heavy payload parsing in Node.js,
                sync JSON operations indeed block the event loop.
                We should offload the parsing block using worker
                threads or stream-chunked processing. Here is an
                optimized asynchronous pattern using a streaming
                parser:
            </p>

            <div class="text-right mt-3">
                <span class="text-[9px] text-[#626a76]">
                10:25 AM
                </span>
            </div>

            </div>

        </div>

        </div>

    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>