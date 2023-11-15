const filters = [
  {
    id: 'brand',
    name: 'Brand',
    options: [
      { value: 'Honda', label: 'Honda', checked: false },
      { value: 'Yamaha', label: 'Yamaha', checked: false },
      { value: 'Suzuki', label: 'Suzuki', checked: false },
    ],
  },
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'Condition',
    name: 'Condition',
    options: [
      { value: '100', label: '100', checked: false },
      { value: '90', label: '90', checked: false },
      { value: '80', label: '80', checked: false },
      { value: '70', label: '70', checked: false },
      { value: '60', label: '60', checked: false },
      { value: '50', label: '50', checked: false },
      { value: '40', label: '40', checked: false },
      { value: '30', label: '30', checked: false },
      { value: '20', label: '20', checked: false },
      { value: '10', label: '10', checked: false },
      { value: '0', label: '0', checked: false },
    ],
  },
  {
    id: 'Year',
    name: 'Year',
    options: [
      { value: 2023, label: '2023', checked: false },
      { value: 2022, label: '2022', checked: false },
      { value: 2021, label: '2021', checked: false },
      { value: 2020, label: '2020', checked: false },
      { value: 2019, label: '2019', checked: false },
      { value: 2018, label: '2018', checked: false },
      { value: 2017, label: '2017', checked: false },
      { value: 2016, label: '2016', checked: false },
      { value: 2015, label: '2015', checked: false },
      { value: 2014, label: '2014', checked: false },
      { value: 2013, label: '2013', checked: false },
      { value: 2012, label: '2012', checked: false },
      { value: 2011, label: '2011', checked: false },
      { value: 2010, label: '2010', checked: false },
      { value: 2009, label: '2009', checked: false },
      { value: 2008, label: '2008', checked: false },
      { value: 2007, label: '2007', checked: false },
      { value: 2006, label: '2006', checked: false },
      { value: 2005, label: '2005', checked: false },
      { value: 2004, label: '2004', checked: false },
      { value: 2003, label: '2003', checked: false },
      { value: 2002, label: '2002', checked: false },
      { value: 2001, label: '2001', checked: false },
      { value: 2000, label: '2000', checked: false },
    ],
  },
]

const subCategories = [
  { name: 'Honda', href: '#' },
  { name: 'Yamaha', href: '#' },
  { name: 'Suzuki', href: '#' },
]

export { filters, subCategories }
