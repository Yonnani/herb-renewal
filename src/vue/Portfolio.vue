<template>
    <div>
        <h3>포트폴리오 PORTFOLIO</h3>
        <b-tabs>
            <b-tab title="석가산">
                <ArtificialHillPortfolio></ArtificialHillPortfolio>
            </b-tab>
            <b-tab title="산벽">
                <MountainPortfolio></MountainPortfolio>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
    import ArtificialHillPortfolio from "./portfolio/ArtificialHillPortfolio";
    import MountainPortfolio from "./portfolio/MountainPortfolio";
    export default {
        name: 'Portfolio',
        components: {ArtificialHillPortfolio, MountainPortfolio}
    }
</script>