import {defineField, defineType} from "sanity";
export default defineType({
  name:"testimonial",title:"Customer testimonials",type:"document",
  fields:[
    defineField({name:"customerName",title:"Customer name or display label",type:"string",validation:r=>r.required()}),
    defineField({name:"quote",title:"Testimonial",type:"text",rows:3,validation:r=>r.required()}),
    defineField({name:"location",title:"Location",type:"string"}),
    defineField({name:"approved",title:"Approved for publication",type:"boolean",initialValue:false})
  ],
  preview:{select:{title:"customerName",subtitle:"location"}}
});