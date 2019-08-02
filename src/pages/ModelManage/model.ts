interface ModelChart {
  xIndex?: string;
  yIndex?: string;

}

class ModelDetail {
  VariableImportance?: any = {};
}

class ModelBase {
  ModelChart: ModelChart = {};
  createTime: string = "";
}

class Model extends ModelBase {
  classificationModels: classificationModels[] = [];
  RegressionModels: RegressionModels [] = [];
  ClusterModel: ClusterModel[] = [];
  OutlierModel: OutlierModel[] = [];
}

class classificationModels {

}

class RegressionModels {
  projectId: string = "";
  id: string = "";
  ModelDetail: ModelDetail = {};
  realLabelScore = {};
  modelName: string = "";
  accuracyData: any = {};
}

class ClusterModel {

}

class OutlierModel {

}