<template>
<div class="footer-home">
    <div class="nav-footer">
        <div class="footer-items-contends">
            <HeaderMenuNavbar buttonTitle="Solution" />
            <FooterItems footerItems="Facilities Management" />
            <FooterItems  footerItems="Computer Vision AI " />
            <FooterItems footerItems="Design Automation" />
            <FooterItems  footerItems="Viewer" />
            <FooterItems  footerItems="Adkins Platform" />
            <FooterItems  footerItems="Online meeting" />
            <FooterItems  footerItems="Camera AI" />
        </div>
        <div class="footer-items-contends">
            <HeaderMenuNavbar buttonTitle="Service" />
            <FooterItems footerItems="System Intergration" />
            <FooterItems footerItems="BIM Services" />
            <FooterItems footerItems="3D scan services" />
            <FooterItems footerItems="Outsources" />
        </div>
        <div class="footer-items-contends">
            <HeaderMenuNavbar buttonTitle="Resources" />
            <FooterItems footerItems="Tech blog" />
            <FooterItems footerItems="Success stories" />
            <FooterItems footerItems="Events" />
            <FooterItems footerItems="BIM" />
            <FooterItems footerItems="Digital twin" />
        </div>
        <div>
            <h1 class="footer-title">BUILDTAP</h1>
        </div>
    </div>
</div>
</template>

<script>
import HeaderMenuNavbar from '@/components/layouts/navbar/MainNavBar.vue';
import FooterItems from '@/components/layouts/footer/FooterItems.vue';

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
    top: 30px;
    width: 800px;
    display: flex;
    justify-content: space-around;
    margin-left: 30px;
    margin-bottom: 50px;
}
.footer-items-contends {
    text-align:justify;
}
.footer-title {
  position: relative;
  left: 250px;
}
</style>
