<template>
    <div class="header_link flex items-start justify-end">
        <router-link to="/license" class="link">LICENSE NOTES</router-link>
        <a href="https://euz.ihk.de/datenschutzerklaerung-4084442" class="link">PRIVACY POLICY</a>
        <a href="https://euz.ihk.de/impressum-4084438" class="link">LEGAL NOTICE</a>
    </div>
</template>


<style scoped>
.header_link {
    height: 30px;
    background: linear-gradient(to right, #6685A3, #39577B);
}

.header_link .link {
    color: #fff;
    font-size: 12px;
    padding-top: 10px;
    line-height: normal;
    font-family: 'korb';
    padding-right: 20px;
    text-decoration: none;
}

</style>