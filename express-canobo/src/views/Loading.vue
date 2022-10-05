<template>
    <div class="d-flex steps align-items-center justify-content-center " :class="steps">
        <img :src="setImage" alt="">
        <div class="titles">
            <h1>{{ titles.first }}</h1>
            <p class="second-title">{{ titles.second }}</p>
            <p class="third-title">{{ titles.third }}</p>
        </div>
    </div>
</template>

<script>
import loading1 from '@/assets/loading1.png';
import loading2 from '@/assets/loading2.png';
import loading3 from '@/assets/loading3.png';
export default {
    data() {
        return {
            setImage: loading1,
            titles: { first: 'Checking Data Entery', second: 'This step may take quite awhile', third: 'Thanks for being patient' },
            steps: 'step1'
        }
    },
    mounted() {
        setTimeout(() => {
            this.setImage = loading2;
            this.steps = 'step2'
            this.titles = {
                first: 'Analysis Started',
                second: 'The running time is according to your data size',
                third: 'Thanks for being patient'
            }
        }, 5000);
        setTimeout(() => {
            this.setImage = loading3;
            this.steps = 'step3'

            this.titles = {
                first: 'Gathering Results',
                second: 'Congratulations! Your analysis ends perfectly',
                third: 'Thanks for being patient'
            }
        }, 8000);
        setTimeout(() => {
            this.$router.push({ path: '/chart' })
        }, 11000);
    }
}
</script>

<style lang="scss" scoped>
.steps {
    height: 100vh;
    width: 100%;
    background-color: #000000;

    h1 {
        font-size: 83px;
        color: white;
    }

    .second-title,
    .third-title {
        font-size: 52px;
    }

    img {
        animation: myAnim 5s ease 0s infinite normal none;

    }

    .titles {
        margin-left: 150px;
        width: 830px;
    }
}

.step1 {
    .titles {
        display: flex;
        width: 800px;
        flex-direction: column;

        .second-title {
            color: #D34A4B;
            margin-bottom: 0;
            line-height: 1;
        }

        .third-title {
            color: #562D30;
        }
    }

}

.step2 {
    .second-title {
        color: #6B88C5;
        margin-bottom: 0;
        line-height: 1;
    }

    .third-title {
        color: #36425A;
    }
}

.step3 {
    .second-title {
        color: #6AB53F;
        margin-bottom: 0;
        line-height: 1;
    }

    .third-title {
        color: #2C4C35;
    }
}

@keyframes myAnim {

    0%,
    50%,
    100% {
        opacity: 1;
    }

    25%,
    75% {
        opacity: 0;
    }
}
</style>