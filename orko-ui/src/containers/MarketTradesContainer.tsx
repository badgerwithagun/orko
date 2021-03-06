/*
 * Orko
 * Copyright © 2018-2019 Graham Crockford
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import React, { useContext } from "react"
import TradeHistory from "../components/TradeHistory"
import WhileLoading from "../components/WhileLoading"
import WithCoin from "./WithCoin"
import { SocketContext } from "modules/socket"

const MarketTradesContainer: React.FC<any> = () => {
  const socketApi = useContext(SocketContext)
  return (
    <WithCoin padded>
      {() => (
        <WhileLoading data={socketApi.trades} padded>
          {() => <TradeHistory trades={socketApi.trades} excludeFees={true} />}
        </WhileLoading>
      )}
    </WithCoin>
  )
}

export default MarketTradesContainer
