<template>
  <div class="container-fluid">
    <div class="row top ps-6 pe-6 pb-4 pt-6 align-items-center">
      <div class="col-xxl-3 logo col-lg-4 col-12">
        <router-link to="/">
          <Logo />
        </router-link>
      </div>
      <div class="col-xxl-9 menu col-xl-8  col-12">
        <div class="d-flex justify-content-between mt-0 mt-lg-3 mt-xl-0">
          <div class="d-flex">
            <div v-for="item in menuItems" :key="item.id">
              <router-link
                  :to="item.path"
                  custom
                  v-slot="{ href, route, navigate, isActive, isExactActive }"
              >
                <NavLink :active="isActive" :href="href" @click="navigate">
                <span :class="[isActive && 'active']" class="menu-item">{{
                    item.name
                  }}</span>
                </NavLink>
              </router-link>
            </div>
          </div>
          <div class="d-none d-lg-block">
            <button class="signIn">Sign In</button>
          </div>
        </div>
      </div>
      <div class="collapseIcon">
        <span>
          <img
            v-if="collapsed"
            class="img-fluid"
            @click="collapseIcon"
            :src="menu"
            alt=""
          />
          <img
            v-else
            class="img-fluid"
            @click="collapseIcon"
            :src="times"
            alt=""
          />
        </span>
      </div>
      <div v-if="!collapsed" class="d-flex flex-column mobile-menu">
        <div @click="collapseIcon" v-for="item in mobileMenuItems" :key="item.id">
          <router-link
            :to="item.path"
            custom
            v-slot="{ href, route, navigate, isActive, isExactActive }"
          >
            <NavLink :active="isActive" :href="href" @click="navigate">
              <span class="menu-item">{{ item.name }} </span>
            </NavLink>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "./icons/Logo.vue";
import menu from "@/assets/menu.svg";
import times from "@/assets/times.svg";

export default {
  name: "Top",
  components: { Logo },
  data() {
    return {
      times,
      menu,
      collapsed: true,
      menuItems: [
        {
          id: 1,
          path: "/team",
          name: "Team",
        },
        {
          id: 2,
          path: "/researches",
          name: "Researches",
        },
        {
          id: 3,
          path: "/services-and-tools",
          name: "Services and Tools",
        },
        {
          id: 4,
          path: "/contacts",
          name: "Contacts",
        },
      ],
      mobileMenuItems: [
        {
          id: 1,
          path: "/team",
          name: "Team",
        },
        {
          id: 2,
          path: "/researches",
          name: "Researches",
        },
        {
          id: 4,
          path: "/contacts",
          name: "Contacts",
        },
      ],
    };
  },
  methods: {
    collapseIcon() {
      this.collapsed = !this.collapsed;
    },
  },
};
</script>

<style lang="scss" scoped>
.top {
    .menu .active {
    background-color: #f5f5f5;
  }
  @media screen and (max-width: 800px) {
    border-top: 12px solid #E52620;
    position: relative;
    padding: 2rem 20px 2rem 15px !important;
    justify-content: space-between;
    .collapseIcon {
      width: fit-content;
      display: block;
    }
    .logo {
      width: fit-content;
    }
    .logoTop {
      width: 138px;
      height: 37px;
    }
    .mobile-menu {
      z-index: 999;
      position: absolute;
      bottom: -135%;
      border: 1px solid #cecece;
      background-color: white;
      width: 85%;
      padding-left: 44px;
      left: 7.5%;
      .menu-item {
        font-size: 30px;
      }
    }
  }
  .signIn{
    background-color: #E51E20;
    padding: 0 30px;
    color: white;
    font-size: 30px;
    border: unset !important;
    white-space: nowrap;
  }
}
.collapseIcon {
  display: none;
}
.menu {
  @media screen and (max-width: 800px) {
    display: none !important;
  }

  .menu-item {
    margin-right: 25px;
    font-size: 35px;
    cursor: pointer;
    padding: 0 30px;
    border-radius: 22px;
    white-space: nowrap;
  }
}

@media screen and (max-width: 1400px) {
  .menu .menu-item {
    margin-right: 20px;
    font-size: 27px;
    padding: 5px 15px;
    border-radius: 20px;
  }
}
</style>