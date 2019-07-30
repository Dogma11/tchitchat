import CustomInput from '/imports/ui/components/CustomInput';
import CustomSelect from '/imports/ui/components/CustomSelect';

const fields = [
    {
        name: "gender",
        component: CustomSelect,
        color: "black",
        options: [
            {name: "Miss", value: "Miss"}, 
            {name: "Mister", value: "Mister"}, 
            {name: "Misses", value: "Misses"},
        ],
    },
    {
        name: "birthdate",
        component: CustomInput,
        color: "black",
    },
    {
        name: "city",
        component: CustomInput,
        placeholder: "City",
        color: "black",
    }
]

export default fields;