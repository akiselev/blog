<script context="module">
    export function load() {
        return {
            status: 302,
            redirect: "/blog/page/1",
        };
    }

    export const prerender = true;
</script>
