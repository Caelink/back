import { BaseController } from './base';
import { Context } from 'koa';
import { collection } from '../formats/hal/match';
import { Match } from '../models/match';
import { LadderService } from '../services/ladder';
import { MatchService } from '../services/match';

export class MatchCollectionController extends BaseController {

  async get(ctx: Context) {

    const matchService = new MatchService();
    const ladderService = new LadderService();

    const ladder = await ladderService.getByKey( ctx.params.ladderKey );
    ctx.body = collection(
      ladder,
      await matchService.getByLadder(ladder)
    );

  }

}
