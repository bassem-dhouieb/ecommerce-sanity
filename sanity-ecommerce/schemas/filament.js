export default {
    name: 'filament',
    title: 'Filament',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'material',
            title: 'Material',
            type: 'string',
            options: {
                list: [
                  { title: 'ABS', value: 'abs' },
                  { title: 'PLA', value: 'pla' },
                  { title: 'TPE', value: 'tpe' },
                  { title: 'TPU', value: 'tpu' },
                ],
              },
        },
        {
            title: "Color List",
            description: "Pick a color",
            name: "colors",
            type: "colorlist", // required
            options: {
              list: [
                { title: "Red", value: "#f16d70" },
                { title: "Teal", value: "#88c6db" },
                { title: "Purple", value: "#aca0cc" },
                { title: "Green", value: "#bdcdcb" },
                { title: "White", value: "white" }
              ]
            }
          },
          {
            name: 'weight',
            title: 'Weight',
            type: 'number',
        },
       
    ],
  };