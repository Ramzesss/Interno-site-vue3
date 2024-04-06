<template>
    <header class="nav__top center">
        <div class="nav__icon">
            <router-link to="/">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                        fill="#CDA274" />
                </svg>
            </router-link>
            <h2 class="nav__name">Interno</h2>
        </div>
        <div class="nav__link">
            <router-link to="/" class="nav__link-btn" >Home</router-link>
            <router-link to="/Project" class="nav__link-btn" >Project</router-link>
            <router-link to="/Blog" class="nav__link-btn" >Blog</router-link>
        </div>
    </header>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped></style>