<template>
<div class="footer-home">
    <div class="nav-footer">
        <div style="float: left;">
            <HeaderMenuNavbar buttonTitle="Solution" />
            <FooterItems footerItems="Facilities Management" />
            <FooterItems  footerItems="Computer Vision AI " />
            <FooterItems footerItems="Design Automation" />
            <FooterItems  footerItems="Viewer" />
            <FooterItems  footerItems="Addins Platform" />
            <FooterItems  footerItems="Online meeting" />
            <FooterItems  footerItems="Camera AI" />
        </div>
        <div class="footer-service">
            <HeaderMenuNavbar buttonTitle="Service" />
            <FooterItems footerItems="System Intergration" />
            <FooterItems footerItems="BIM Services" />
            <FooterItems footerItems="3D scan services" />
            <FooterItems footerItems="Outsources" />
        </div>
        <div class="footer-resources">
            <HeaderMenuNavbar buttonTitle="Resources" />
            <FooterItems footerItems="Tech blog" />
            <FooterItems footerItems="Success stories" />
            <FooterItems footerItems="Events" />
            <FooterItems footerItems="BIM" />
            <FooterItems footerItems="Digital twin" />
        </div>
        <div>
            <h1>BUILDTAP</h1>
        </div>
    </div>
    <div>
        <HeaderMenuNavbar  buttonTitle="Contact us" />
        <div class="footer-items">
            <p>Copyright© 2022 MaintainX. All rights reserved</p>
            <div class="footer-items-icon">
                <font-awesome-icon icon="fa-brands fa-facebook" />
                <font-awesome-icon icon="fa-brands fa-twitter" />
                <font-awesome-icon icon="fa-brands fa-linkedin" />
                <font-awesome-icon icon="fa-brands fa-instagram" />
                <font-awesome-icon icon="fa-brands fa-youtube" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import HeaderMenuNavbar from '@/components/layouts/navbar/MainNavBar.vue';
import FooterItems from './FooterItems.vue';

export default {
  name: 'FooterHome',
  components: {
    HeaderMenuNavbar,
    FooterItems,
  },
};
</script>

<style>
.footer-home {
    height: auto;
    max-width: auto;
    background-color: rgb(234, 240, 240);
}
.nav-footer {
    width: 800px;
    display: flex;
    justify-content: space-around;
    margin-left: 30px;
}

.footer-items {
    display: flex;
}

.footer-items-icons {
    display: flex;
}
</style>
