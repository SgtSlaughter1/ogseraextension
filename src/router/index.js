import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Login from '@/views/Login.vue'
import TSPRegistration from "@/views/TSPRegistration.vue";
import RegistrationStepOne from "@/components/TSPRegistration/RegistrationStepOne.vue";
import RegistrationStepTwo from "@/components/TSPRegistration/RegistrationStepTwo.vue";
import RegistrationStepThree from "@/components/TSPRegistration/RegistrationStepThree.vue";
import RegistrationStepFour from "@/components/TSPRegistration/RegistrationStepFour.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LandingPage,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },

    {
      path: "/registration",
      component: TSPRegistration,
      children: [
        {
          path: "",
          redirect: { name: "registration-step-1" },
        },
        {
          path: "step-1",
          name: "registration-step-1",
          component: RegistrationStepOne,
        },
        {
          path: "step-2",
          name: "registration-step-2",
          component: RegistrationStepTwo,
        },
        {
          path: "step-3",
          name: "registration-step-3",
          component: RegistrationStepThree,
        },
        {
          path: "step-4",
          name: "registration-step-4",
          component: RegistrationStepFour,
        },
      ],
    },
  ],
});

export default router
