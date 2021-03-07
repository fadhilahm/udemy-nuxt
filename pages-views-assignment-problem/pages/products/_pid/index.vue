<template>
    <div>
        <h1>This is the product page for PID:</h1>
        <h2>{{ $route.params.pid }}</h2>
    </div>
</template>

<script>
export default {
    validate ({ params: { pid }}) {
        return /^\d+$/.test(pid);
    }
}
</script>