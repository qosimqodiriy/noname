<template>
    <div class="header">
        <div class="max-w-[85%] md:max-w-[80%] mx-auto w-full h-full flex items-center justify-between">
            <div class="flex items-center flex-auto w-full">
                <router-link to="/" class="mr-[30px] shrink-0">
                    <img class="w-[100px] h-[100px] mb-[4px] !shrink-0" src="../../assets/images/logo.png" alt="">
                </router-link>
                
                <router-link to="/verification/37305227/details" class="w-full">
                    <p class="bartitle">CERTIFICATE <span class="whitespace-nowrap">OF ORIGIN</span></p>
                    <p class="bartitle_small">Verification Website</p>
                </router-link>
            </div>
            
            <div class="img_box">
                <p class="inline-block shrink-0">
                    <img class="shrink-0 w-auto" src="../../assets/images/IHK.jpg" alt="">
                </p>
                <p class="inline-block shrink-0">
                    <img class="shrink-0 w-auto" src="../../assets/images/DIHK.png" alt="">
                </p>
            </div>
        </div>
    </div>
</template>


<style lang="css">
.header {
    height: 175px;
    background: linear-gradient(to right, #C6D0DA, #39577C);
}

.bartitle {
    color: #fff;
    line-height: normal;
    font-family: 'korb';
    font-size: calc(12px + 1.8vw);
}

.bartitle_small {
    color: #fff;
    line-height: normal;
    font-family: 'korb';
    font-size: calc(6px + 1vw);
}

.img_box {
    flex-flow: wrap;
    box-sizing: border-box;
    display: flex;
    place-content: center flex-end;
    align-items: center;
    flex: 1 1 100%;
    max-width: 20%;
}
.img_box p {
    margin-bottom: 4.5px;
}

.img_box p img {
    width: auto;
    padding-right: 20px;
    height: calc(40px + 1vw);
}
</style>