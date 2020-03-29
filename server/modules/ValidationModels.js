import RetrospectiveLifeFields from '../api/Card/blocks/Form/Retrospective/Life/fields'

import RetrospectiveDiagnosisFields from '../api/Card/blocks/Form/Retrospective/Diagnosis/fields'
import RetrospectiveAdditionalDiagnosesFields from '../api/Card/blocks/Item/Retrospective/AdditionalDiagnoses/fields'

import RetrospectiveAmount from '../api/Card/blocks/Item/Retrospective/Amount/fields'

import RetrospectiveSpirometryFields from '../api/Card/blocks/Item/Retrospective/Spirometry/fields'
import RetrospectiveRiskGOLDFields from '../api/Card/blocks/Item/Retrospective/RiskGOLD/fields'
import RetrospectiveSeverityGOLDFields from '../api/Card/blocks/Item/Retrospective/SeverityGOLD/fields'
import RetrospectivePulseoximetryFields from '../api/Card/blocks/Item/Retrospective/Pulseoximetry/fields'
import RetrospectiveTestCATFields from '../api/Card/blocks/Item/Retrospective/TestCAT/fields'
import RetrospectiveTestMMRCFields from '../api/Card/blocks/Item/Retrospective/TestMMRC/fields'

import RetrospectiveComorbiditiesFields from '../api/Card/blocks/Form/Retrospective/Comorbidities/fields'

import RetrospectiveDisabilityFields from '../api/Card/blocks/Form/Retrospective/Disability/fields'

import RetrospectiveTherapyFields from '../api/Card/blocks/Item/Retrospective/Therapy/fields'

import RetrospectiveFluVaccinationFields from '../api/Card/blocks/Item/Retrospective/FluVaccination/fields'
import RetrospectivePneumococcalInfectionVaccinationFields from '../api/Card/blocks/Item/Retrospective/PneumococcalInfectionVaccination/fields'

import RetrospectiveAdditionalFields from '../api/Card/blocks/Form/Retrospective/Additional/fields'

import PerspectiveHospitalizationFields from '../api/Card/blocks/Item/Perspective/Hospitalization/fields'
import PerspectiveDiagnosisFields from '../api/Card/blocks/Form/Perspective/Diagnosis/fields'
import PerspectiveResultTherapyFields from '../api/Card/blocks/Form/Perspective/ResultTherapy/fields'
import PerspectiveTherapyFields from '../api/Card/blocks/Item/Perspective/Therapy/fields'

import PerspectivePlanVisitFields from '../api/Card/blocks/Item/Perspective/PlanVisit/fields'
import PerspectiveExtraVisitFields from '../api/Card/blocks/Item/Perspective/ExtraVisit/fields'

import PerspectiveFluVaccinationFields from '../api/Card/blocks/Item/Perspective/FluVaccination/fields'
import PerspectivePneumococcalInfectionVaccinationFields from '../api/Card/blocks/Item/Perspective/PneumococcalInfectionVaccination/fields'

import PerspectiveFunctionalIndicatorFields from '../api/Card/blocks/Item/Perspective/FunctionalIndicator/fields'
import PerspectiveFunctionalIndicatorEKGFields from '../api/Card/blocks/Item/Perspective/FunctionalIndicatorEKG/fields'


const models = {
  'retrospective-life': RetrospectiveLifeFields,
  
  'retrospective-diagnosis': RetrospectiveDiagnosisFields,
  'retrospective-additional-diagnoses': RetrospectiveAdditionalDiagnosesFields,
  
  'retrospective-amount-infectious-exacerbations': RetrospectiveAmount,
  'retrospective-amount-non-infectious-exacerbations': RetrospectiveAmount,
  'retrospective-amount-pneumonia': RetrospectiveAmount,
  'retrospective-amount-infectious-hospitalization': RetrospectiveAmount,
  'retrospective-amount-non-infectious-hospitalization': RetrospectiveAmount,
  'retrospective-amount-pneumonia-hospitalization': RetrospectiveAmount,
  'retrospective-amount-other-hospitalization': RetrospectiveAmount,
  'retrospective-amount-plan-ambul-visit': RetrospectiveAmount,
  'retrospective-amount-extra-ambul-visit': RetrospectiveAmount,
  
  'retrospective-spirometry': RetrospectiveSpirometryFields,
  'retrospective-risk-gold': RetrospectiveRiskGOLDFields,
  'retrospective-severity-gold': RetrospectiveSeverityGOLDFields,
  'retrospective-pulseoximetry': RetrospectivePulseoximetryFields,
  'retrospective-test-cat': RetrospectiveTestCATFields,
  'retrospective-test-mmrc': RetrospectiveTestMMRCFields,
  
  'retrospective-comorbidities': RetrospectiveComorbiditiesFields,
  
  'retrospective-disability': RetrospectiveDisabilityFields,

  'retrospective-bronchodilator': RetrospectiveTherapyFields,
  'retrospective-igks-bd': RetrospectiveTherapyFields,
  'retrospective-inhaled-gks': RetrospectiveTherapyFields,
  'retrospective-system-gks': RetrospectiveTherapyFields,
  'retrospective-other-therapy': RetrospectiveTherapyFields,
  'retrospective-change-therapy': RetrospectiveTherapyFields,

  'retrospective-flu-vaccination': RetrospectiveFluVaccinationFields,
  'retrospective-pneumococcal-infection-vaccination': RetrospectivePneumococcalInfectionVaccinationFields,
  
  'retrospective-additional': RetrospectiveAdditionalFields,

  'perspective-hospitalization': PerspectiveHospitalizationFields,

  'perspective-hospitalization-additional-diagnoses': RetrospectiveAdditionalDiagnosesFields,
  'perspective-hospitalization-diagnosis': PerspectiveDiagnosisFields,
  
  'perspective-hospitalization-result-therapy': PerspectiveResultTherapyFields,
  'perspective-hospitalization-antibacterial-drugs': PerspectiveTherapyFields,
  'perspective-hospitalization-inhaled-bronchodilator': PerspectiveTherapyFields,
  'perspective-hospitalization-fix-igks-ddba-ddba-ddah': PerspectiveTherapyFields,
  'perspective-hospitalization-non-fix-igks-ddba-ddba-ddah': PerspectiveTherapyFields,
  'perspective-hospitalization-inhaled-gks': PerspectiveTherapyFields,
  'perspective-hospitalization-system-gks': PerspectiveTherapyFields,
  'perspective-hospitalization-other-drugs': PerspectiveTherapyFields,

  'perspective-plan-visit': PerspectivePlanVisitFields,
  
  'perspective-plan-visit-result-therapy': PerspectiveResultTherapyFields,
  'perspective-plan-visit-antibacterial-drugs': PerspectiveTherapyFields,
  'perspective-plan-visit-inhaled-bronchodilator': PerspectiveTherapyFields,
  'perspective-plan-visit-fix-igks-ddba-ddba-ddah': PerspectiveTherapyFields,
  'perspective-plan-visit-non-fix-igks-ddba-ddba-ddah': PerspectiveTherapyFields,
  'perspective-plan-visit-inhaled-gks': PerspectiveTherapyFields,
  'perspective-plan-visit-system-gks': PerspectiveTherapyFields,
  'perspective-plan-visit-other-drugs': PerspectiveTherapyFields,

  'perspective-extra-visit': PerspectiveExtraVisitFields,
  
  'perspective-extra-visit-result-therapy': PerspectiveResultTherapyFields,
  'perspective-extra-visit-antibacterial-drugs': PerspectiveTherapyFields,
  'perspective-extra-visit-inhaled-bronchodilator': PerspectiveTherapyFields,
  'perspective-extra-visit-fix-igks-ddba-ddba-ddah': PerspectiveTherapyFields,
  'perspective-extra-visit-non-fix-igks-ddba-ddba-ddah': PerspectiveTherapyFields,
  'perspective-extra-visit-inhaled-gks': PerspectiveTherapyFields,
  'perspective-extra-visit-system-gks': PerspectiveTherapyFields,
  'perspective-extra-visit-other-drugs': PerspectiveTherapyFields,

  'perspective-flu-vaccination': PerspectiveFluVaccinationFields,
  'perspective-pneumococcal-infection-vaccination': PerspectivePneumococcalInfectionVaccinationFields,
  
  'perspective-functional-indicator-ofv1': PerspectiveFunctionalIndicatorFields,
  'perspective-functional-indicator-fjel': PerspectiveFunctionalIndicatorFields,
  'perspective-functional-indicator-ofv1-fjel': PerspectiveFunctionalIndicatorFields,
  'perspective-functional-indicator-ekg': PerspectiveFunctionalIndicatorEKGFields,
  'perspective-functional-indicator-hss': PerspectiveFunctionalIndicatorFields,
  'perspective-functional-indicator-hdd': PerspectiveFunctionalIndicatorFields,
  'perspective-functional-indicator-ad': PerspectiveFunctionalIndicatorFields,
  'perspective-functional-indicator-saturation': PerspectiveFunctionalIndicatorFields,
}

export default {
  getModel (item) {
    return models[item]
  }
}