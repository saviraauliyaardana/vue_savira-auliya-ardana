import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import { penjumlahan, pengurangan, perkalian, pembagian, 
  rataRata, sisaBagi, luasPersegi, luasLingkaran, luasKubus, volumeKubus } from "../../src/utils/index";

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})


describe('Melakukan test operasi penjumlahan',()  => {
  it('penjumlahan dua bilangan positif', () => {
    expect(penjumlahan(7,5)).toBe(12);
  });
  it('penjumlahan dua bilangan positif dan negatf', () => {
    expect(penjumlahan(5,-19)).toBe(-14);
  });
  it('penjumlahan dua bilangan negatif', () => {
    expect(penjumlahan(-7,-7)).toBe(-14);
  });
}
)

describe('Melakukan test operasi pengurangan',()  => {
  it('pengurangan bilangan positif', () => {
    expect(pengurangan(4,6)).toBe(-2);
  });
  it('pengurangan bilangan positif dan negatf', () => {
    expect(pengurangan(-2,8)).toBe(-10);
  });
  it('pengurangan bilangan negatif', () => {
    expect(pengurangan(-2,-8)).toBe(6);
  });
}
)

describe('Melakukan test operasi pembagian',()  => {
  it('penjumlahan bilangan positif', () => {
    expect(pembagian(8,2)).toBe(4);
  });
  it('pembagian bilangan positif dan negatf', () => {
    expect(pembagian(-8,2)).toBe(-4);
  });
  it('pembagian bilangan negatif', () => {
    expect(pembagian(-32,-8)).toBe(4);
  });
}
)

describe('Melakukan test operasi perkalian',()  => {
  it('perkalian bilangan positif', () => {
    expect(perkalian(8,2)).toBe(16);
  });
  it('penjumlahan bilangan positif dan negatf', () => {
    expect(perkalian(2,-8)).toBe(-16);
  });
  it('penjumlahan bilangan negatif', () => {
    expect(perkalian(-2,-8)).toBe(16);
  });
}
)

describe('Melakukan test operasi rataRata',()  => {
  it('rataRata bilangan positif', () => {
    expect(rataRata(4,6,8,2,5)).toBe(5);
  });
  it('rataRata bilangan positif dan negatif', () => {
    expect(rataRata(4,-4,5,-5,10)).toBe(2);
  });
  it('rataRata bilangan negatif', () => {
    expect(rataRata(-5,-5,-5,-5,-5)).toBe(-5);
  });
}
)

describe('Melakukan test operasi sisaBagi',()  => {
  it('rataRata bilangan positif', () => {
    expect(sisaBagi(7,3)).toBe(2*3/3 + (1/3));
  });
  it('rataRata bilangan positif dan negatif', () => {
    expect(sisaBagi(7,-3)).toBe(-2*-3/-3 + (1/-3));
  });
  it('rataRata bilangan negatif', () => {
    expect(sisaBagi(-7,-3)).toBe(2*-3/-3 +(-1/-3));
  });
}
)

describe('Melakukan test operasi luasPersegi',()  => {
  it('luasPersegi bilangan positif', () => {
    expect(luasPersegi(5,5)).toBe(25);
  });
  it('luasPersegi bilangan positif dan negatif', () => {
    expect(luasPersegi(-4,10)).toBe(-40);
  });
  it('luasPersegi bilangan negatif', () => {
    expect(luasPersegi(-2,-10)).toBe(20);
  });
}
)

describe('Melakukan test operasi luasLingkaran',()  => {
  it('luasLingkaran bilangan positif', () => {
    expect(luasLingkaran(7)).toBe(154);
  });
  it('rataRata bilangan positif dan negatif', () => {
    expect(luasLingkaran(14)).toBe(616);
  });
  it('rataRata bilangan negatif', () => {
    expect(luasLingkaran(-28)).toBe(2464);
  });
}
)

describe('Melakukan test operasi luasKubus',()  => {
  it('luasKubus bilangan positif', () => {
    expect(luasKubus(5)).toBe(25);
  });
  it('luasKubus bilangan positif dan negatif', () => {
    expect(luasKubus(10)).toBe(100);
  });
  it('luasKubus bilangan negatif', () => {
    expect(luasKubus(-10)).toBe(100);
  });
}
)

describe('Melakukan test operasi volumeKubus',()  => {
  it('volumeKubus bilangan positif', () => {
    expect(volumeKubus(5)).toBe(125);
  });
  it('volumeKubus bilangan positif dan negatif', () => {
    expect(volumeKubus(10)).toBe(1000);
  });
  it('volumeKubus bilangan negatif', () => {
    expect(volumeKubus(-10)).toBe(-1000);
  });
}
)
