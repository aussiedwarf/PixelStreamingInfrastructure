// Copyright Epic Games, Inc. All Rights Reserved.

/**
 * Latency Test Response Data
 */
export class LatencyTestResponse {
    ReceivedTimestamp: number;
    SenderTimestamp: number;
    SentTimestamp: number;
    Seq: number;
}

/**
 * Latency Timestamp Report Data
 */
export class LatencyTimestampData {
    FrameNum?: number;
    Draw: number;
    Capture?: number;
    Encode?: number;
    Network?: number;
    Decode: number;
}

/**
 * Latency Timestamp Report
 */
export class LatencyTimestampReport {
    timestamps: Array<LatencyTimestampData>;

    constructor() {
        this.timestamps = [];
    }
}

