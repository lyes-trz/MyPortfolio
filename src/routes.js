import Home from './components/Home.vue';
import Me from './components/Me.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';

export const routes = [

      { path: '/', component: Home },      
      { path: '/Me', component: Me },
      { path: '/Skills', component: Skills },
      { path: '/Projects', component: Projects },
      { path: '/Contact', component: Contact }


]