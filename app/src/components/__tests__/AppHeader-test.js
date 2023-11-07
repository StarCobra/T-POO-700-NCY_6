import { shallowMount } from '@vue/test-utils';
import AppHeader from '../AppHeader.vue';

describe('Components > AppHeader', () => {
  it('should render correctly', () => {
    const wrapper = shallowMount(AppHeader);

    // Vérifiez que le composant est rendu correctement
    expect(wrapper.exists()).toBe(true);

    // Vous pouvez ajouter d'autres assertions pour vérifier le rendu du composant
  });
});
