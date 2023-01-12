export namespace types {
	
	export class ImageSummary {
	    Containers: number;
	    Created: number;
	    Id: string;
	    Labels: {[key: string]: string};
	    ParentId: string;
	    RepoDigests: string[];
	    RepoTags: string[];
	    SharedSize: number;
	    Size: number;
	    VirtualSize: number;
	
	    static createFrom(source: any = {}) {
	        return new ImageSummary(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.Containers = source["Containers"];
	        this.Created = source["Created"];
	        this.Id = source["Id"];
	        this.Labels = source["Labels"];
	        this.ParentId = source["ParentId"];
	        this.RepoDigests = source["RepoDigests"];
	        this.RepoTags = source["RepoTags"];
	        this.SharedSize = source["SharedSize"];
	        this.Size = source["Size"];
	        this.VirtualSize = source["VirtualSize"];
	    }
	}

}

