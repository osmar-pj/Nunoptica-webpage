<template>
    <div class="container" id="disenos">
        <section class="section">
            <h1 class="title has-text-azul">ULTIMOS DISEÑOS</h1>
            <div class="buttons is-centered">
                <b-button type="is-dark" outlined  rounded size="is-medium" >Fotos</b-button>
                <b-button type="is-dark" outlined  rounded size="is-medium" >Productos</b-button>
                <b-button type="is-dark" outlined  rounded size="is-medium" >Imagen</b-button>
            </div>
        </section>
        <section class="section fotografia">
            <div class="tile is-ancestor">
                <div class="tile is-vertical">
                    <div class="tile is-parent">
                        <article class="tile is-child ">
                            <figure class="image is-1by1" >
                                <img src="../assets/pics/400x400_woman_v2.png" data-aos="flip-down">
                            </figure>
                        </article>
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child ">
                            <figure class="image is-1by1">
                                <img src="../assets/pics/400x400_man_lentes_sol.png" data-aos="flip-right">
                            </figure>
                        </article>
                    </div>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child ">
                        <figure class="image is-1by2">
                            <img src="../assets/pics/400x400_woman_v3.png" data-aos="flip-right">
                        </figure>
                    </article>
                </div>
                <div class="tile is-vertical is-6">
                    <div class="tile is-parent">
                        <article class="tile is-child ">
                            <figure class="image is-2by1">
                                <img src="../assets/pics/800x400_man_lentes_2.png" data-aos="flip-left">
                            </figure>
                        </article>
                    </div>
                    <div class="tile">
                        <div class="tile is-parent">
                            <article class="tile is-child">
                                <figure class="image is-square">
                                    <img src="../assets/pics/400x400_woman_lentes.png" data-aos="flip-up">
                                </figure>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child ">
                                <figure class="image is-square">
                                    <img src="../assets/pics/400x400_lentes_1.png" data-aos="flip-right">
                                </figure>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
    .is-parent {
        margin: -6px;
    }
</style>