<template>
    <div id="footer" class="is-fluid">
        <footer class="footer">
            <div class="content has-text-centered">
                <div class="columns is-mobile">
                    <div class="column is-7-desktop is-12-mobile">
                        <a href="#">
                            <img class="logo-negativo" src="../assets/svg/logo_negativo.png" alt="">
                        </a>
                        <div class="block">
                            <a href="https://www.facebook.com/nunopticas" target="_blank"> <b-icon icon="facebook" size="is-medium" class="icon" type="is-light"></b-icon></a>
                            <a href=""> <b-icon icon="linkedin" size="is-medium" class="icon" type="is-light"></b-icon></a>
                            <a href=""> <b-icon icon="instagram" size="is-medium" class="icon" type="is-light"></b-icon></a>
                        </div>
                    </div>
                    <div class="column is-5-desktop is-12-mobile has-text-left">
                        <h1 class="title is-size-4 has-text-claro">SUCURSALES EN EL PERU</h1>
                        <b-field v-for="info in infos" :key="info.id">
                            <div class="columns is-mobile">
                                <div class="column is-3-desktop is-4-mobile">
                                    <a :href="info.link" target="_blank" class="button is-success is-outlined">
                                        <span class="icon">
                                            <b-icon
                                                icon="whatsapp"
                                                type="is-success">
                                            </b-icon>
                                        </span>
                                        <span> {{ info.mobile }} </span>
                                    </a>
                                </div>
                                <div class="column is-2-mobile">
                                    <p class="title is-size-6 has-text-claro"> {{ info.ciudad }} </p>
                                    <p class="subtitle is-size-7 has-text-claro">Asesor: {{ info.nombre }} </p>
                                </div>
                            </div>
                        </b-field>
                    </div>
                </div>
                
                <p>Powered by <a href="https://gunjop.com/" target="_blank"><span>GUNJOP!</span> </a> COMPANY</p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            infos: [
                { id: 1, ciudad: 'LIMA', nombre: 'Virginia', link: 'https://wa.me/51989124694', mobile: '+51 989124694' },
                { id: 2, ciudad: 'AREQUIPA', nombre: 'Liz', link: 'https://wa.me/51932516399', mobile: '+51 932516399' },
                { id: 3, ciudad: 'CUSCO', nombre: 'Lizardo', link: 'https://wa.me/51927868974', mobile: '+51 927868974' },
                { id: 4, ciudad: 'HUANCAYO', nombre: 'Karem', link: 'https://wa.me/51971244435', mobile: '+51 971244435' },
                { id: 5, ciudad: 'PUNO', nombre: 'Yovana', link: 'https://wa.me/51920430629', mobile: '+51 920430629' }
            ]
        }
    }
}
</script>

<style lang="scss">
    .icon {
        margin: 0 20px;
    }
    .footer {
        background: rgb(17,29,94);
        background: linear-gradient(148deg, rgba(17,29,94,1) 39%, rgba(199,0,57,1) 100%);
    }
    .logo-negativo {
        padding: 2rem;
    }
</style>