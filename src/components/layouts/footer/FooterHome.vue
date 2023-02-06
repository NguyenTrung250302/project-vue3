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
            <h1>BUILDTAP</h1>
        </div>
    </div>
    <div class="footer-final">
        <HeaderMenuNavbar  buttonTitle="Contact us" />
        <div class="footer-items icons">
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
    width: 800px;
    display: flex;
    justify-content: space-around;
    margin-left: 30px;
    margin-bottom: 50px;
}

.footer-items {
    display: flex;
}

.footer-items-contends {
    text-align:justify;
}

.icons {
    display: flex;
    justify-content: space-between;
}

.footer-final {
    margin-left: 55px;
    text-align:justify;
    border-top: solid 1px rgb(177, 177, 245);
}
.footer-items-icons {
    display: flex;
}
</style>
