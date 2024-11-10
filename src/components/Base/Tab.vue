<template>
    <div class="pt-5 pb-10">
        <div class="my_container">
            <div class="nav_link">
                <div class="nav_item item_1">
                    <router-link to="/">Home</router-link>
                </div>
                <div class="nav_item item_2">
                    <router-link to="/chambers" class="md:whitespace-nowrap">List of All German Chambers</router-link>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
* {
    transition: 0.3s;
}

.nav_link {
    flex-flow: wrap;
    box-sizing: border-box;
    display: flex;
    place-content: stretch flex-start;
    align-items: stretch;
    flex: 1 1 100%;
    max-width: 80%;
    padding: 0.75px 0;
}

.nav_link .nav_item {
    padding-right: calc(50px + 10vw);
    list-style: none;
    border-bottom: 2px solid #909090;
    display: list-item;
    text-align: -webkit-match-parent;
    margin: 16px 30px 16px 0;
}

.nav_link .item_2 {
    max-width: 430px;
}

.nav_link .nav_item:hover {
    border-bottom: 2px solid #2d76b2;
}

.nav_link .nav_item a {
    font-size: 20px;
    color: #551A8B;
    line-height: normal;
    font-family: 'Source Sans 3';
}

.nav_link .nav_item:hover a {
    color: #2d76b2;
}


@media (max-width: 767px) {
    .nav_link {
        max-width: 100%;
    }

    .nav_link .item_2 {
        width: 100%;
        max-width: 330px;
    }
}
</style>