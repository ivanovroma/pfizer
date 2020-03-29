import Vue from 'vue'
import Vuetify from 'vuetify'

import Logout from '../components/App/Logout.vue'
import Breadcrumbs from '../components/App/Breadcrumbs.vue'
import Pagination from '../components/App/Pagination.vue'

import DepartmentCreate from '../components/Department/Create.vue'
import DepartmentUpdate from '../components/Department/Update.vue'
import DepartmentRemove from '../components/Department/Remove.vue'
import DepartmentItem from '../components/Department/Item.vue'
import DepartmentList from '../components/Department/List.vue'

import UserCreate from '../components/User/Create.vue'
import UserUpdate from '../components/User/Update.vue'
import UserUpdatePassword from '../components/User/UpdatePassword.vue'
import UserRemove from '../components/User/Remove.vue'
import UserList from '../components/User/List.vue'
import UserItem from '../components/User/Item.vue'

import CardCreate from '../components/Card/Create.vue'
import CardItem from '../components/Card/Item.vue'
import CardList from '../components/Card/List.vue'
import CardRemove from '../components/Card/Remove.vue'
import CardSummaryData from '../components/Card/SummaryData.vue'

import Translator from '../modules/translator'

import CardSectionDefault from '../components/Card/parts/SectionDefault.vue'
import CardPanelDefault from '../components/Card/parts/PanelDefault.vue'
import CardFieldsDefault from '../components/Card/parts/FieldsDefault.vue'

import StringField from '../components/Card/fields/String.vue'
import NumberField from '../components/Card/fields/Number.vue'
import BooleanField from '../components/Card/fields/Boolean.vue'
import ChecklistField from '../components/Card/fields/Checklist.vue'
import SelectlistField from '../components/Card/fields/Selectlist.vue'
import DateField from '../components/Card/fields/Date.vue'
import YearField from '../components/Card/fields/Year.vue'

import FormRetrospectiveLife from '../components/Card/blocks/Retrospective/Form/Life.vue'

import FormRetrospectiveDiagnosis from '../components/Card/blocks/Retrospective/Form/Diagnosis.vue'

import CreateRetrospectiveAdditionalDiagnoses from '../components/Card/blocks/Retrospective/List/AdditionalDiagnoses/Create.vue'
import ListRetrospectiveAdditionalDiagnoses from '../components/Card/blocks/Retrospective/List/AdditionalDiagnoses/List.vue'
import ItemRetrospectiveAdditionalDiagnoses from '../components/Card/blocks/Retrospective/List/AdditionalDiagnoses/Item.vue'
import UpdateRetrospectiveAdditionalDiagnoses from '../components/Card/blocks/Retrospective/List/AdditionalDiagnoses/Update.vue'
import RemoveRetrospectiveAdditionalDiagnoses from '../components/Card/blocks/Retrospective/List/AdditionalDiagnoses/Remove.vue'

import CreateRetrospectiveAmount from '../components/Card/blocks/Retrospective/List/Amount/Create.vue'
import ListRetrospectiveAmount from '../components/Card/blocks/Retrospective/List/Amount/List.vue'
import ItemRetrospectiveAmount from '../components/Card/blocks/Retrospective/List/Amount/Item.vue'
import UpdateRetrospectiveAmount from '../components/Card/blocks/Retrospective/List/Amount/Update.vue'
import RemoveRetrospectiveAmount from '../components/Card/blocks/Retrospective/List/Amount/Remove.vue'

import CreateRetrospectiveSpirometry from '../components/Card/blocks/Retrospective/List/Spirometry/Create.vue'
import ListRetrospectiveSpirometry from '../components/Card/blocks/Retrospective/List/Spirometry/List.vue'
import ItemRetrospectiveSpirometry from '../components/Card/blocks/Retrospective/List/Spirometry/Item.vue'
import UpdateRetrospectiveSpirometry from '../components/Card/blocks/Retrospective/List/Spirometry/Update.vue'
import RemoveRetrospectiveSpirometry from '../components/Card/blocks/Retrospective/List/Spirometry/Remove.vue'

import CreateRetrospectiveRiskGOLD from '../components/Card/blocks/Retrospective/List/RiskGOLD/Create.vue'
import ListRetrospectiveRiskGOLD from '../components/Card/blocks/Retrospective/List/RiskGOLD/List.vue'
import ItemRetrospectiveRiskGOLD from '../components/Card/blocks/Retrospective/List/RiskGOLD/Item.vue'
import UpdateRetrospectiveRiskGOLD from '../components/Card/blocks/Retrospective/List/RiskGOLD/Update.vue'
import RemoveRetrospectiveRiskGOLD from '../components/Card/blocks/Retrospective/List/RiskGOLD/Remove.vue'

import CreateRetrospectiveSeverityGOLD from '../components/Card/blocks/Retrospective/List/SeverityGOLD/Create.vue'
import ListRetrospectiveSeverityGOLD from '../components/Card/blocks/Retrospective/List/SeverityGOLD/List.vue'
import ItemRetrospectiveSeverityGOLD from '../components/Card/blocks/Retrospective/List/SeverityGOLD/Item.vue'
import UpdateRetrospectiveSeverityGOLD from '../components/Card/blocks/Retrospective/List/SeverityGOLD/Update.vue'
import RemoveRetrospectiveSeverityGOLD from '../components/Card/blocks/Retrospective/List/SeverityGOLD/Remove.vue'

import CreateRetrospectivePulseoximetry from '../components/Card/blocks/Retrospective/List/Pulseoximetry/Create.vue'
import ListRetrospectivePulseoximetry from '../components/Card/blocks/Retrospective/List/Pulseoximetry/List.vue'
import ItemRetrospectivePulseoximetry from '../components/Card/blocks/Retrospective/List/Pulseoximetry/Item.vue'
import UpdateRetrospectivePulseoximetry from '../components/Card/blocks/Retrospective/List/Pulseoximetry/Update.vue'
import RemoveRetrospectivePulseoximetry from '../components/Card/blocks/Retrospective/List/Pulseoximetry/Remove.vue'

import CreateRetrospectiveTestCAT from '../components/Card/blocks/Retrospective/List/TestCAT/Create.vue'
import ListRetrospectiveTestCAT from '../components/Card/blocks/Retrospective/List/TestCAT/List.vue'
import ItemRetrospectiveTestCAT from '../components/Card/blocks/Retrospective/List/TestCAT/Item.vue'
import UpdateRetrospectiveTestCAT from '../components/Card/blocks/Retrospective/List/TestCAT/Update.vue'
import RemoveRetrospectiveTestCAT from '../components/Card/blocks/Retrospective/List/TestCAT/Remove.vue'

import CreateRetrospectiveTestMMRC from '../components/Card/blocks/Retrospective/List/TestMMRC/Create.vue'
import ListRetrospectiveTestMMRC from '../components/Card/blocks/Retrospective/List/TestMMRC/List.vue'
import ItemRetrospectiveTestMMRC from '../components/Card/blocks/Retrospective/List/TestMMRC/Item.vue'
import UpdateRetrospectiveTestMMRC from '../components/Card/blocks/Retrospective/List/TestMMRC/Update.vue'
import RemoveRetrospectiveTestMMRC from '../components/Card/blocks/Retrospective/List/TestMMRC/Remove.vue'

import FormRetrospectiveComorbidities from '../components/Card/blocks/Retrospective/Form/Comorbidities.vue'

import FormRetrospectiveDisability from '../components/Card/blocks/Retrospective/Form/Disability.vue'

import CreateRetrospectiveTherapy from '../components/Card/blocks/Retrospective/List/Therapy/Create.vue'
import ListRetrospectiveTherapy from '../components/Card/blocks/Retrospective/List/Therapy/List.vue'
import ItemRetrospectiveTherapy from '../components/Card/blocks/Retrospective/List/Therapy/Item.vue'
import UpdateRetrospectiveTherapy from '../components/Card/blocks/Retrospective/List/Therapy/Update.vue'
import RemoveRetrospectiveTherapy from '../components/Card/blocks/Retrospective/List/Therapy/Remove.vue'

import CreateRetrospectiveFluVaccination from '../components/Card/blocks/Retrospective/List/FluVaccination/Create.vue'
import ListRetrospectiveFluVaccination from '../components/Card/blocks/Retrospective/List/FluVaccination/List.vue'
import ItemRetrospectiveFluVaccination from '../components/Card/blocks/Retrospective/List/FluVaccination/Item.vue'
import UpdateRetrospectiveFluVaccination from '../components/Card/blocks/Retrospective/List/FluVaccination/Update.vue'
import RemoveRetrospectiveFluVaccination from '../components/Card/blocks/Retrospective/List/FluVaccination/Remove.vue'

import CreateRetrospectivePneumococcalInfectionVaccination from '../components/Card/blocks/Retrospective/List/PneumococcalInfectionVaccination/Create.vue'
import ListRetrospectivePneumococcalInfectionVaccination from '../components/Card/blocks/Retrospective/List/PneumococcalInfectionVaccination/List.vue'
import ItemRetrospectivePneumococcalInfectionVaccination from '../components/Card/blocks/Retrospective/List/PneumococcalInfectionVaccination/Item.vue'
import UpdateRetrospectivePneumococcalInfectionVaccination from '../components/Card/blocks/Retrospective/List/PneumococcalInfectionVaccination/Update.vue'
import RemoveRetrospectivePneumococcalInfectionVaccination from '../components/Card/blocks/Retrospective/List/PneumococcalInfectionVaccination/Remove.vue'

import FormRetrospectiveAdditional from '../components/Card/blocks/Retrospective/Form/Additional.vue'

import SummaryDataPerspectiveHospitalization from '../components/Card/blocks/Perspective/List/Hospitalization/SummaryData.vue'
import CreatePerspectiveHospitalization from '../components/Card/blocks/Perspective/List/Hospitalization/Create.vue'
import ListPerspectiveHospitalization from '../components/Card/blocks/Perspective/List/Hospitalization/List.vue'
import ItemPerspectiveHospitalization from '../components/Card/blocks/Perspective/List/Hospitalization/Item.vue'
import UpdatePerspectiveHospitalization from '../components/Card/blocks/Perspective/List/Hospitalization/Update.vue'
import RemovePerspectiveHospitalization from '../components/Card/blocks/Perspective/List/Hospitalization/Remove.vue'

import FormPerspectiveDiagnosis from '../components/Card/blocks/Perspective/Form/Diagnosis.vue'
import FormPerspectiveResultTherapy from '../components/Card/blocks/Perspective/Form/ResultTherapy.vue'

import CreatePerspectiveTherapy from '../components/Card/blocks/Perspective/List/Therapy/Create.vue'
import ListPerspectiveTherapy from '../components/Card/blocks/Perspective/List/Therapy/List.vue'
import ItemPerspectiveTherapy from '../components/Card/blocks/Perspective/List/Therapy/Item.vue'
import UpdatePerspectiveTherapy from '../components/Card/blocks/Perspective/List/Therapy/Update.vue'
import RemovePerspectiveTherapy from '../components/Card/blocks/Perspective/List/Therapy/Remove.vue'

import SummaryDataPerspectivePlanVisit from '../components/Card/blocks/Perspective/List/PlanVisit/SummaryData.vue'
import CreatePerspectivePlanVisit from '../components/Card/blocks/Perspective/List/PlanVisit/Create.vue'
import ListPerspectivePlanVisit from '../components/Card/blocks/Perspective/List/PlanVisit/List.vue'
import ItemPerspectivePlanVisit from '../components/Card/blocks/Perspective/List/PlanVisit/Item.vue'
import UpdatePerspectivePlanVisit from '../components/Card/blocks/Perspective/List/PlanVisit/Update.vue'
import RemovePerspectivePlanVisit from '../components/Card/blocks/Perspective/List/PlanVisit/Remove.vue'

import SummaryDataPerspectiveExtraVisit from '../components/Card/blocks/Perspective/List/ExtraVisit/SummaryData.vue'
import CreatePerspectiveExtraVisit from '../components/Card/blocks/Perspective/List/ExtraVisit/Create.vue'
import ListPerspectiveExtraVisit from '../components/Card/blocks/Perspective/List/ExtraVisit/List.vue'
import ItemPerspectiveExtraVisit from '../components/Card/blocks/Perspective/List/ExtraVisit/Item.vue'
import UpdatePerspectiveExtraVisit from '../components/Card/blocks/Perspective/List/ExtraVisit/Update.vue'
import RemovePerspectiveExtraVisit from '../components/Card/blocks/Perspective/List/ExtraVisit/Remove.vue'

import CreatePerspectiveFluVaccination from '../components/Card/blocks/Perspective/List/FluVaccination/Create.vue'
import ListPerspectiveFluVaccination from '../components/Card/blocks/Perspective/List/FluVaccination/List.vue'
import ItemPerspectiveFluVaccination from '../components/Card/blocks/Perspective/List/FluVaccination/Item.vue'
import UpdatePerspectiveFluVaccination from '../components/Card/blocks/Perspective/List/FluVaccination/Update.vue'
import RemovePerspectiveFluVaccination from '../components/Card/blocks/Perspective/List/FluVaccination/Remove.vue'

import CreatePerspectivePneumococcalInfectionVaccination from '../components/Card/blocks/Perspective/List/PneumococcalInfectionVaccination/Create.vue'
import ListPerspectivePneumococcalInfectionVaccination from '../components/Card/blocks/Perspective/List/PneumococcalInfectionVaccination/List.vue'
import ItemPerspectivePneumococcalInfectionVaccination from '../components/Card/blocks/Perspective/List/PneumococcalInfectionVaccination/Item.vue'
import UpdatePerspectivePneumococcalInfectionVaccination from '../components/Card/blocks/Perspective/List/PneumococcalInfectionVaccination/Update.vue'
import RemovePerspectivePneumococcalInfectionVaccination from '../components/Card/blocks/Perspective/List/PneumococcalInfectionVaccination/Remove.vue'

import CreatePerspectiveFunctionalIndicator from '../components/Card/blocks/Perspective/List/FunctionalIndicator/Create.vue'
import ListPerspectiveFunctionalIndicator from '../components/Card/blocks/Perspective/List/FunctionalIndicator/List.vue'
import ItemPerspectiveFunctionalIndicator from '../components/Card/blocks/Perspective/List/FunctionalIndicator/Item.vue'
import UpdatePerspectiveFunctionalIndicator from '../components/Card/blocks/Perspective/List/FunctionalIndicator/Update.vue'
import RemovePerspectiveFunctionalIndicator from '../components/Card/blocks/Perspective/List/FunctionalIndicator/Remove.vue'

import CreatePerspectiveFunctionalIndicatorEKG from '../components/Card/blocks/Perspective/List/FunctionalIndicatorEKG/Create.vue'
import ListPerspectiveFunctionalIndicatorEKG from '../components/Card/blocks/Perspective/List/FunctionalIndicatorEKG/List.vue'
import ItemPerspectiveFunctionalIndicatorEKG from '../components/Card/blocks/Perspective/List/FunctionalIndicatorEKG/Item.vue'
import UpdatePerspectiveFunctionalIndicatorEKG from '../components/Card/blocks/Perspective/List/FunctionalIndicatorEKG/Update.vue'
import RemovePerspectiveFunctionalIndicatorEKG from '../components/Card/blocks/Perspective/List/FunctionalIndicatorEKG/Remove.vue'

Vue.use(Vuetify)

Vue.mixin({
  methods: {
    translatorBoolean (data) {
      return Translator.boolean(data)
    },
    translatorError (data) {
      return Translator.error(data)
    },
    translatorKeyDate (data) {
      return Translator.keyDate(data)
    }
  }
})

Vue.component('Logout', Logout)
Vue.component('Breadcrumbs', Breadcrumbs)
Vue.component('Pagination', Pagination)

Vue.component('DepartmentCreate', DepartmentCreate)
Vue.component('DepartmentUpdate', DepartmentUpdate)
Vue.component('DepartmentRemove', DepartmentRemove)
Vue.component('DepartmentItem', DepartmentItem)
Vue.component('DepartmentList', DepartmentList)

Vue.component('UserCreate', UserCreate)
Vue.component('UserUpdate', UserUpdate)
Vue.component('UserUpdatePassword', UserUpdatePassword)
Vue.component('UserRemove', UserRemove)
Vue.component('UserList', UserList)
Vue.component('UserItem', UserItem)

Vue.component('CardCreate', CardCreate)
Vue.component('CardItem', CardItem)
Vue.component('CardList', CardList)
Vue.component('CardRemove', CardRemove)
Vue.component('CardSummaryData', CardSummaryData)

Vue.component('CardSectionDefault', CardSectionDefault)
Vue.component('CardPanelDefault', CardPanelDefault)
Vue.component('CardFieldsDefault', CardFieldsDefault)

Vue.component('StringField', StringField)
Vue.component('NumberField', NumberField)
Vue.component('BooleanField', BooleanField)
Vue.component('ChecklistField', ChecklistField)
Vue.component('SelectlistField', SelectlistField)
Vue.component('DateField', DateField)
Vue.component('YearField', YearField)

Vue.component('FormRetrospectiveLife', FormRetrospectiveLife)

Vue.component('FormRetrospectiveDiagnosis', FormRetrospectiveDiagnosis)

Vue.component('CreateRetrospectiveAdditionalDiagnoses', CreateRetrospectiveAdditionalDiagnoses)
Vue.component('ListRetrospectiveAdditionalDiagnoses', ListRetrospectiveAdditionalDiagnoses)
Vue.component('ItemRetrospectiveAdditionalDiagnoses', ItemRetrospectiveAdditionalDiagnoses)
Vue.component('UpdateRetrospectiveAdditionalDiagnoses', UpdateRetrospectiveAdditionalDiagnoses)
Vue.component('RemoveRetrospectiveAdditionalDiagnoses', RemoveRetrospectiveAdditionalDiagnoses)

Vue.component('CreateRetrospectiveAmount', CreateRetrospectiveAmount)
Vue.component('ListRetrospectiveAmount', ListRetrospectiveAmount)
Vue.component('ItemRetrospectiveAmount', ItemRetrospectiveAmount)
Vue.component('UpdateRetrospectiveAmount', UpdateRetrospectiveAmount)
Vue.component('RemoveRetrospectiveAmount', RemoveRetrospectiveAmount)

Vue.component('CreateRetrospectiveSpirometry', CreateRetrospectiveSpirometry)
Vue.component('ListRetrospectiveSpirometry', ListRetrospectiveSpirometry)
Vue.component('ItemRetrospectiveSpirometry', ItemRetrospectiveSpirometry)
Vue.component('UpdateRetrospectiveSpirometry', UpdateRetrospectiveSpirometry)
Vue.component('RemoveRetrospectiveSpirometry', RemoveRetrospectiveSpirometry)

Vue.component('CreateRetrospectiveRiskGOLD', CreateRetrospectiveRiskGOLD)
Vue.component('ListRetrospectiveRiskGOLD', ListRetrospectiveRiskGOLD)
Vue.component('ItemRetrospectiveRiskGOLD', ItemRetrospectiveRiskGOLD)
Vue.component('UpdateRetrospectiveRiskGOLD', UpdateRetrospectiveRiskGOLD)
Vue.component('RemoveRetrospectiveRiskGOLD', RemoveRetrospectiveRiskGOLD)

Vue.component('CreateRetrospectiveSeverityGOLD', CreateRetrospectiveSeverityGOLD)
Vue.component('ListRetrospectiveSeverityGOLD', ListRetrospectiveSeverityGOLD)
Vue.component('ItemRetrospectiveSeverityGOLD', ItemRetrospectiveSeverityGOLD)
Vue.component('UpdateRetrospectiveSeverityGOLD', UpdateRetrospectiveSeverityGOLD)
Vue.component('RemoveRetrospectiveSeverityGOLD', RemoveRetrospectiveSeverityGOLD)

Vue.component('CreateRetrospectivePulseoximetry', CreateRetrospectivePulseoximetry)
Vue.component('ListRetrospectivePulseoximetry', ListRetrospectivePulseoximetry)
Vue.component('ItemRetrospectivePulseoximetry', ItemRetrospectivePulseoximetry)
Vue.component('UpdateRetrospectivePulseoximetry', UpdateRetrospectivePulseoximetry)
Vue.component('RemoveRetrospectivePulseoximetry', RemoveRetrospectivePulseoximetry)

Vue.component('CreateRetrospectiveTestCAT', CreateRetrospectiveTestCAT)
Vue.component('ListRetrospectiveTestCAT', ListRetrospectiveTestCAT)
Vue.component('ItemRetrospectiveTestCAT', ItemRetrospectiveTestCAT)
Vue.component('UpdateRetrospectiveTestCAT', UpdateRetrospectiveTestCAT)
Vue.component('RemoveRetrospectiveTestCAT', RemoveRetrospectiveTestCAT)

Vue.component('CreateRetrospectiveTestMMRC', CreateRetrospectiveTestMMRC)
Vue.component('ListRetrospectiveTestMMRC', ListRetrospectiveTestMMRC)
Vue.component('ItemRetrospectiveTestMMRC', ItemRetrospectiveTestMMRC)
Vue.component('UpdateRetrospectiveTestMMRC', UpdateRetrospectiveTestMMRC)
Vue.component('RemoveRetrospectiveTestMMRC', RemoveRetrospectiveTestMMRC)

Vue.component('FormRetrospectiveComorbidities', FormRetrospectiveComorbidities)

Vue.component('FormRetrospectiveDisability', FormRetrospectiveDisability)

Vue.component('CreateRetrospectiveTherapy', CreateRetrospectiveTherapy)
Vue.component('ListRetrospectiveTherapy', ListRetrospectiveTherapy)
Vue.component('ItemRetrospectiveTherapy', ItemRetrospectiveTherapy)
Vue.component('UpdateRetrospectiveTherapy', UpdateRetrospectiveTherapy)
Vue.component('RemoveRetrospectiveTherapy', RemoveRetrospectiveTherapy)

Vue.component('CreateRetrospectiveFluVaccination', CreateRetrospectiveFluVaccination)
Vue.component('ListRetrospectiveFluVaccination', ListRetrospectiveFluVaccination)
Vue.component('ItemRetrospectiveFluVaccination', ItemRetrospectiveFluVaccination)
Vue.component('UpdateRetrospectiveFluVaccination', UpdateRetrospectiveFluVaccination)
Vue.component('RemoveRetrospectiveFluVaccination', RemoveRetrospectiveFluVaccination)

Vue.component('CreateRetrospectivePneumococcalInfectionVaccination', CreateRetrospectivePneumococcalInfectionVaccination)
Vue.component('ListRetrospectivePneumococcalInfectionVaccination', ListRetrospectivePneumococcalInfectionVaccination)
Vue.component('ItemRetrospectivePneumococcalInfectionVaccination', ItemRetrospectivePneumococcalInfectionVaccination)
Vue.component('UpdateRetrospectivePneumococcalInfectionVaccination', UpdateRetrospectivePneumococcalInfectionVaccination)
Vue.component('RemoveRetrospectivePneumococcalInfectionVaccination', RemoveRetrospectivePneumococcalInfectionVaccination)

Vue.component('FormRetrospectiveAdditional', FormRetrospectiveAdditional)

Vue.component('SummaryDataPerspectiveHospitalization', SummaryDataPerspectiveHospitalization)
Vue.component('CreatePerspectiveHospitalization', CreatePerspectiveHospitalization)
Vue.component('ListPerspectiveHospitalization', ListPerspectiveHospitalization)
Vue.component('ItemPerspectiveHospitalization', ItemPerspectiveHospitalization)
Vue.component('UpdatePerspectiveHospitalization', UpdatePerspectiveHospitalization)
Vue.component('RemovePerspectiveHospitalization', RemovePerspectiveHospitalization)

Vue.component('FormPerspectiveDiagnosis', FormPerspectiveDiagnosis)
Vue.component('FormPerspectiveResultTherapy', FormPerspectiveResultTherapy)

Vue.component('CreatePerspectiveTherapy', CreatePerspectiveTherapy)
Vue.component('ListPerspectiveTherapy', ListPerspectiveTherapy)
Vue.component('ItemPerspectiveTherapy', ItemPerspectiveTherapy)
Vue.component('UpdatePerspectiveTherapy', UpdatePerspectiveTherapy)
Vue.component('RemovePerspectiveTherapy', RemovePerspectiveTherapy)

Vue.component('SummaryDataPerspectivePlanVisit', SummaryDataPerspectivePlanVisit)
Vue.component('CreatePerspectivePlanVisit', CreatePerspectivePlanVisit)
Vue.component('ListPerspectivePlanVisit', ListPerspectivePlanVisit)
Vue.component('ItemPerspectivePlanVisit', ItemPerspectivePlanVisit)
Vue.component('UpdatePerspectivePlanVisit', UpdatePerspectivePlanVisit)
Vue.component('RemovePerspectivePlanVisit', RemovePerspectivePlanVisit)

Vue.component('SummaryDataPerspectiveExtraVisit', SummaryDataPerspectiveExtraVisit)
Vue.component('CreatePerspectiveExtraVisit', CreatePerspectiveExtraVisit)
Vue.component('ListPerspectiveExtraVisit', ListPerspectiveExtraVisit)
Vue.component('ItemPerspectiveExtraVisit', ItemPerspectiveExtraVisit)
Vue.component('UpdatePerspectiveExtraVisit', UpdatePerspectiveExtraVisit)
Vue.component('RemovePerspectiveExtraVisit', RemovePerspectiveExtraVisit)

Vue.component('CreatePerspectiveFluVaccination', CreatePerspectiveFluVaccination)
Vue.component('ListPerspectiveFluVaccination', ListPerspectiveFluVaccination)
Vue.component('ItemPerspectiveFluVaccination', ItemPerspectiveFluVaccination)
Vue.component('UpdatePerspectiveFluVaccination', UpdatePerspectiveFluVaccination)
Vue.component('RemovePerspectiveFluVaccination', RemovePerspectiveFluVaccination)

Vue.component('CreatePerspectivePneumococcalInfectionVaccination', CreatePerspectivePneumococcalInfectionVaccination)
Vue.component('ListPerspectivePneumococcalInfectionVaccination', ListPerspectivePneumococcalInfectionVaccination)
Vue.component('ItemPerspectivePneumococcalInfectionVaccination', ItemPerspectivePneumococcalInfectionVaccination)
Vue.component('UpdatePerspectivePneumococcalInfectionVaccination', UpdatePerspectivePneumococcalInfectionVaccination)
Vue.component('RemovePerspectivePneumococcalInfectionVaccination', RemovePerspectivePneumococcalInfectionVaccination)

Vue.component('CreatePerspectiveFunctionalIndicator', CreatePerspectiveFunctionalIndicator)
Vue.component('ListPerspectiveFunctionalIndicator', ListPerspectiveFunctionalIndicator)
Vue.component('ItemPerspectiveFunctionalIndicator', ItemPerspectiveFunctionalIndicator)
Vue.component('UpdatePerspectiveFunctionalIndicator', UpdatePerspectiveFunctionalIndicator)
Vue.component('RemovePerspectiveFunctionalIndicator', RemovePerspectiveFunctionalIndicator)

Vue.component('CreatePerspectiveFunctionalIndicatorEKG', CreatePerspectiveFunctionalIndicatorEKG)
Vue.component('ListPerspectiveFunctionalIndicatorEKG', ListPerspectiveFunctionalIndicatorEKG)
Vue.component('ItemPerspectiveFunctionalIndicatorEKG', ItemPerspectiveFunctionalIndicatorEKG)
Vue.component('UpdatePerspectiveFunctionalIndicatorEKG', UpdatePerspectiveFunctionalIndicatorEKG)
Vue.component('RemovePerspectiveFunctionalIndicatorEKG', RemovePerspectiveFunctionalIndicatorEKG)
