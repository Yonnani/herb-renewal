<template>
    <div>
        <h3>사업분야 BUSINESS</h3>
        <b-tabs>
            <b-tab title="사업영역" active>
                <BusinessArea></BusinessArea>
            </b-tab>
            <b-tab title="석가산">
                <ArtificialHill></ArtificialHill>
            </b-tab>
            <b-tab title="산벽">
                <Mountain></Mountain>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
    import BusinessArea from "./business/BusinessArea";
    import ArtificialHill from "./business/ArtificialHill";
    import Mountain from "./business/Mountain";
    export default {
        name: 'Business',
        components: {Mountain, ArtificialHill, BusinessArea}
    }
</script>