import {defineField, defineType} from "sanity";
export default defineType({
  name: "product", title: "Products", type: "document",
  fields: [
    defineField({name:"name",title:"Product name",type:"string",validation:r=>r.required()}),
    defineField({name:"slug",title:"URL slug",type:"slug",options:{source:"name"},validation:r=>r.required()}),
    defineField({name:"category",title:"Category",type:"string",options:{list:["Toilet Cleaner","Floor Cleaner","Glass Cleaner","Dishwash","Hand Wash","Car Wash","Phenyl"]},validation:r=>r.required()}),
    defineField({name:"shortDescription",title:"Short description",type:"text",rows:2}),
    defineField({name:"description",title:"Description",type:"array",of:[{type:"block"}]}),
    defineField({name:"images",title:"Product images",type:"array",of:[{type:"image",options:{hotspot:true}}]}),
    defineField({name:"packSizes",title:"Available packaging sizes",type:"array",of:[{type:"string"}],options:{layout:"tags"}}),
    defineField({name:"features",title:"Verified product features",type:"array",of:[{type:"string"}]}),
    defineField({name:"usage",title:"Usage instructions",type:"text"}),
    defineField({name:"safety",title:"Safety and handling information",type:"text"}),
    defineField({name:"published",title:"Published on website",type:"boolean",initialValue:false})
  ],
  preview:{select:{title:"name",subtitle:"category",media:"images.0"}}
});