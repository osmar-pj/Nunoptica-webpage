<template>
    <div class="is-fluid">
        <b-navbar>
            <template slot="brand">
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <img
                        src="../assets/svg/logo_positivo.png"
                        alt="Nunoptica"
                    >
                </b-navbar-item>
            </template>
            <template slot="start">
                <b-navbar-item href="https://gunjop.com/" target="_blank">
                    Una compañía de GUNJOP!
                </b-navbar-item>
            </template>

            <template slot="end">
                <b-navbar-item href="#">
                    INICIO
                </b-navbar-item>
                <b-navbar-item href="#disenos">
                    DISEÑOS
                </b-navbar-item>
                <b-navbar-item href="#tienda">
                    TIENDA
                </b-navbar-item>
                <b-navbar-item href="#howWorks">
                    COMO FUNCIONA
                </b-navbar-item>
            </template>
        </b-navbar>
    </div>
</template>