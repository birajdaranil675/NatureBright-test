import {defineField, defineType} from "sanity";
export default defineType({
  name:"siteSettings",title:"Website settings",type:"document",
  fields:[
    defineField({name:"companyName",title:"Company name",type:"string"}),
    defineField({name:"tagline",title:"Tagline",type:"string"}),
    defineField({name:"email",title:"Business email",type:"string"}),
    defineField({name:"phone",title:"Business phone",type:"string"}),
    defineField({name:"address",title:"Business address",type:"text"}),
    defineField({name:"catalogue",title:"Product catalogue PDF",type:"file",options:{accept:".pdf"}})
  ]
});